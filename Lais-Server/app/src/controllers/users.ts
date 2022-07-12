import { Context, Next } from 'koa';

import mongoose from 'mongoose';
import usersSchema from '../schemas/usersSchema';

import * as Argon2 from 'argon2';

const verifyUser = (nameUser: string) => mongoose.model("Users", usersSchema).findOne({ name: nameUser });
const verifyPassword = (passwordCrypted: string, passwordUncrypted: string) => Argon2.verify(passwordCrypted, passwordUncrypted)

const signIn = async (ctx: Context, next: Next) => {
  const { body }: any = ctx.request;
  const { name, password }: any = body;

  const userVerified = await verifyUser(name);

  if (!userVerified) {
    return ctx.status = 404, ctx.body = { status: 'user not found' }
  }

  const passwordVerified = await verifyPassword(userVerified.password, password);

  if (!passwordVerified) {
    return ctx.status = 404, ctx.body = { status: 'password wrong' }
  }

  ctx.status = 200;
  ctx.body = { status: 'authenticated' }

  await next();
};

const getUsers = async (ctx: Context, next: Next) => {
  const usersModel = await mongoose.model("Users", usersSchema).find({});

  ctx.status = 200;
  ctx.body = usersModel;

  await next();
};

const addUser = async (ctx: Context, next: Next) => {
  const { body }: any = ctx.request;
  const { name, password } = body;

  const passwordWithHash = await Argon2.hash(password);

  const userModel = await mongoose.model("Users", usersSchema).create({
    name,
    password: passwordWithHash,
    created_at: new Date().getTime(),
    updated_at: new Date().getTime()
  });

  ctx.status = 200;
  ctx.body = { userModel };
  
  await next();
};

const deleteUser = async (ctx: Context, next: Next) => {
  const { _id } = ctx.params;

  const userModel = await mongoose.model("Users", usersSchema).deleteOne({
    _id
  });

  ctx.status = 200;
  ctx.body = { userModel };
  
  await next();
};

export { signIn, addUser, getUsers, deleteUser };
