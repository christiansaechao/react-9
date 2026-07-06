type ContactFormType = {
  smallHeader: string;
  biggerHeader: string;
  buttonText: string;
};

export const ContactForm = ({
  smallHeader,
  biggerHeader,
  buttonText,
}: ContactFormType) => {
  return (
    <div className="">
      <h3>{smallHeader}</h3>
      <h2>{biggerHeader}</h2>
      <input placeholder="Email Address" />
      <button className="bg-gray-600 rounded-3xl px-4 py-2">{buttonText}</button>
    </div>
  );
};
