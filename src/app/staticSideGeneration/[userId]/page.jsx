const Page = ({ params }) => {
  return (
    <div>
      <h2>user details</h2>
      <p>{params.userId}</p>
    </div>
  );
};

export default Page;
