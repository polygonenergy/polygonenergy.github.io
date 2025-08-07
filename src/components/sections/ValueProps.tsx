const ValueProps = () => {
  return (
    <section id="value" className="container mx-auto py-12 md:py-16">
      <div className="mb-6">
        <h2 className="text-3xl font-semibold">Value Proposition</h2>
        <p className="text-muted-foreground mt-2">
          Why RF-DC batteries change how we power devices.
        </p>
      </div>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>Longer run time on devices</li>
        <li>Longer battery life cycle</li>
        <li>Reduced environmental impact from fewer disposals</li>
        <li>Cost savings over time vs. buying many replacement batteries</li>
        <li>Wireless recharging or self-replenishing charging</li>
        <li>Smart availability of battery power when you need it most</li>
        <li>Software-managed battery performance optimization</li>
      </ul>
    </section>
  );
};

export default ValueProps;
