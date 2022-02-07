const delay = ms => new Promise((resolve) => {
  setTimeout(resolve, ms);
});

export const fetchUsers = async () => {
  await delay(3000);
  return {
    users: [
      {
        imageUrl: 'https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg',
        name: 'Hieu Dong',
        email: 'hieudong@example.com',
        spent: '$2,890.66',
        country: '🇺🇸',
      },
      {
        imageUrl: 'https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-06.jpg',
        name: 'Philip Harbach',
        email: 'philip.h@example.com',
        spent: '$2,767.04',
        country: '🇩🇪',
      },
      {
        imageUrl: 'https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-07.jpg',
        name: 'Mirko Fisuk',
        email: 'mirkofisuk@example.com',
        spent: '$2,996.00',
        country: '🇫🇷',
      },
      {
        imageUrl: 'https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-08.jpg',
        name: 'Olga Semklo',
        email: 'olga.s@cool.design',
        spent: '$1,220.66',
        country: '🇮🇹',
      },
      {
        imageUrl: 'https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-09.jpg',
        name: 'Burak Long',
        email: 'longburak@gmail.com',
        spent: '$1,890.66',
        country: '🇬🇧',
      },
    ],
  };
};
