import { Context, Next } from 'koa';

import * as Realm from 'realm';

import * as Argon2 from 'argon2';

const usersSchema = {
  name: 'Users',
  properties: {
    _id: 'string',
    name: 'string',
    password: 'string',
    created_at: 'int',
    updated_at: 'int',
  },
  primaryKey: '_id',
}

const initializeRealm = async () => await Realm.open({
  path: 'server.realm',
  schema: [usersSchema],
  deleteRealmIfMigrationNeeded: true
});

const signIn = async (ctx: Context, next: Next) => {
  const realm = await initializeRealm();

  const { body }: any = ctx.request;
  const { name, password } = body;

  const user: Object = realm.objects("Users").filtered(`name = '${name}'`);

  if (name !== user[0].name) {
   ctx.status = 404;
   ctx.body = { status: 'user not found' } 
  }

  const verifyPassword = await Argon2.verify(user[0].password, password);

  if (verifyPassword) {
    ctx.status = 200;
    ctx.body = { status: 'authenticated' }
  } else {
    ctx.status = 404;
    ctx.body = { status: 'password wrong' }
  }

  await next();
};

const getUsers = async (ctx: Context, next: Next) => {
  const realm = await initializeRealm();

  const users = realm.objects('Users');

  ctx.status = 200;
  ctx.body = users;

  await next();
};

const addUser = async (ctx: Context, next: Next) => {
  const realm = await initializeRealm();

  const { body }: any = ctx.request;
  const { name, password } = body;

  const nameWithID = Buffer.from(name).toString('base64');

  const passwordWithHash = await Argon2.hash(password);

  realm.write(() => {
    realm.create('Users', {
      _id: nameWithID,
      name,
      password: passwordWithHash,
      created_at: new Date().getTime(),
      updated_at: new Date().getTime()
    });
  });

  ctx.status = 200;
  ctx.body = { name };
  
  await next();
};

const deleteUser = async (ctx: Context, next: Next) => {
  const { _id } = ctx.params;

  const realm = await initializeRealm();

  realm.write(() => {
    realm.delete(realm.objectForPrimaryKey('Users', _id));
  });

  ctx.status = 200;
  ctx.body = { _id };
  
  await next();
};

export { signIn, addUser, getUsers, deleteUser };
