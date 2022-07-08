export const usersSchema = {
  name: 'Users',
  properties: {
    _id: 'string',
    name: 'string',
    created_at: 'int',
    updated_at: 'int',
  },
  primaryKey: '_id',
}
