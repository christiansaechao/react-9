type Userprofiletype = {
  userImage: string;
  name: string;
  description: string;
};

export const Userprofile = ({
  userImage,
  name,
  description,
}: Userprofiletype) => {
  return (
    <>
      <input type="image" placeholder="Add your image" />
      <p>{name}</p>
      <p>{description}</p>
    </>
  );
};
