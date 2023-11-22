import localStorageDataProvider from 'ra-data-local-storage';

export const dataProvider = localStorageDataProvider({
  // defaultData: {
  //   users: [
  //     {id: 1, name: 'John Doe', username: 'john', age: 32, email: 'johndoe@gmail.com', phone: '1234567890', address: {street: '123 Main St', city: 'New York'}, website: 'geofork.xyz', company: {name: "Warren"}},
  //     {id: 2, name: 'Leanne Graham', username: 'leanne', age: 28, email: 'Sincere@april.biz', phone: '1234567890', address: {street: '123 Main St', city: 'New York'}, website: 'graham.co', company: {name: "Graham Inc."}},
  //     {id: 3, name: 'Clementine Bauch', username: 'cbauch', age: 36, email: 'c.bauch@gmail.com', phone: '1234567890', address: {street: '123 Main St', city: 'New York'}, website: 'bauch.id', company: {name: 'Yuzeng'}},
  //   ],
  //   posts: [
  //     {id: 1, title: 'Lorem Ipsum', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.', user_id: 1},
  //     {id: 2, title: 'Sed egestas', body: 'Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.', user_id: 1},
  //     {id: 3, title: 'Lorem Ipsum', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.', user_id: 2},
  //     {id: 4, title: 'Sed egestas', body: 'Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.', user_id: 2},
  //     {id: 5, title: 'Lorem Ipsum', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.', user_id: 3}
  //   ],
  //   events: [
  //     {id: 1, title: 'New Year Party', date: '2019-01-01', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.', thumbnail: 'pict.jpg'},
  //     {id: 2, title: 'Birthday Party', date: '2019-01-01', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.', thumbnail: 'pict.jpg'},
  //   ]
  // },

  defaultData: {
    users: [
      {id: 1, name: 'John Doe', username: 'john', age: 32, email: 'johndoe@gmail.com', phone: '1234567890', address: {street: '123 Main St', city: 'New York'}, website: 'geofork.xyz'},
      {id: 2, name: 'Leanne Graham', username: 'leanne', age: 28, email: 'Sincere@april.biz', phone: '1234567890', address: {street: '123 Main St', city: 'New York'}, website: 'graham.co'},
      {id: 3, name: 'Clementine Bauch', username: 'cbauch', age: 36, email: 'c.bauch@gmail.com', phone: '1234567890', address: {street: '123 Main St', city: 'New York'}, website: 'bauch.id' },
    ],
    projects: [
      {id: 1, title: 'Project 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.', startdate: '2023-11-10', enddate: '2023-12-24', project_leader: 1, project_members: [1, 2, 3]},
      {id: 2, title: 'Project 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.', startdate: '2023-11-12', enddate: '2023-11-24', project_leader: 1, project_members: [1, 2, 3]},
      {id: 3, title: 'Project 3', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.', startdate: '2023-11-15', enddate: '2023-12-12', project_leader: 1, project_members: [1, 3]},
    ],
    tasks: [
      {id: 1, title: 'Task 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.', status: 'in progress', project_id: 1, assigned_to: 1},
      {id: 2, title: 'Task 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.', status: 'in progress', project_id: 1, assigned_to: 2},
    ],
    // user_project: [],
  },
  loggingEnabled: false,
  localStorageUpdateDelay: 3
})
