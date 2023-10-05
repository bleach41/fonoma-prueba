
import CurrencyCalculator from '@/app/components/CurrencyCalculator'

const CurrencyConverter = () => {
  return (
    <main className="max-w-3xl mx-3.5 space-x-1 > * + * flex flex-col">
      <CurrencyCalculator />
    </main>
  );
};

export default CurrencyConverter;
