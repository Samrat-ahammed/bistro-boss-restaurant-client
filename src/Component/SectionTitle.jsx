const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="mb-12 md:w-4/12 mx-auto text-center">
      <h3 className="font-2xl text-yellow-600 mb-4">{subtitle}</h3>
      <h2 className="text-4xl border-y-4 py-3 uppercase">{title}</h2>
    </div>
  );
};

export default SectionTitle;
