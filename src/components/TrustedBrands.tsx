const TrustedBrands = () => {
  const brands = [
    "Shopify", "Stripe", "PayPal", "Square", "WooCommerce", "Magento"
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-muted-foreground text-lg">
            Trusted by 50,000+ businesses worldwide
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 rounded-lg bg-card hover:bg-card/80 transition-colors"
            >
              <span className="text-muted-foreground font-semibold text-lg">
                {brand}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-primary mb-2">99.9%</h3>
              <p className="text-muted-foreground">Uptime guarantee</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-primary mb-2">$2.5B+</h3>
              <p className="text-muted-foreground">Processed annually</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-primary mb-2">180+</h3>
              <p className="text-muted-foreground">Countries supported</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;