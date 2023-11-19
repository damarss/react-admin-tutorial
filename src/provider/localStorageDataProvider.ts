import localStorageDataProvider from 'ra-data-local-storage';

export const dataProvider = localStorageDataProvider({
  defaultData: {
    users: [
      {id: 1, name: 'John Doe', username: 'john', age: 32, email: 'johndoe@gmail.com', phone: '1234567890', address: {street: '123 Main St', city: 'New York'}, website: 'geofork.xyz', company: {name: "Warren"}},
      {id: 2, name: 'Leanne Graham', username: 'leanne', age: 28, email: 'Sincere@april.biz', phone: '1234567890', address: {street: '123 Main St', city: 'New York'}, website: 'graham.co', company: {name: "Graham Inc."}},
      {id: 3, name: 'Clementine Bauch', username: 'cbauch', age: 36, email: 'c.bauch@gmail.com', phone: '1234567890', address: {street: '123 Main St', city: 'New York'}, website: 'bauch.id', company: {name: 'Yuzeng'}},
    ],
    posts: [
      {id: 1, title: 'Lorem Ipsum', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.', user_id: 1},
      {id: 2, title: 'Sed egestas', body: 'Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.', user_id: 1},
      {id: 3, title: 'Lorem Ipsum', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.', user_id: 2},
      {id: 4, title: 'Sed egestas', body: 'Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.', user_id: 2},
      {id: 5, title: 'Lorem Ipsum', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.', user_id: 3}
    ]
  },
  loggingEnabled: false,
  localStorageUpdateDelay: 3
})
