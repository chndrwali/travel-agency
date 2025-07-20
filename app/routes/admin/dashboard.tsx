import Header from 'components/header';

const Dashboard = () => {
  const user = {
    name: 'Candra',
  };

  return (
    <main className="dashboard wrapper">
      <Header title={`Selamat Datang ${user?.name ?? 'Guest'} `} description={'Lacak aktivitas, Tren, dan Tujuan populer secara real-time'} />
      Dashboard
    </main>
  );
};

export default Dashboard;
