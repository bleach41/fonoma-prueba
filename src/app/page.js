
import CurrencyCalculator from '@/app/components/CurrencyCalculator'

const CurrencyConverter = () => {
  return (
    <main className="max-w-3xl space-x-1 > * + * flex flex-col items-center mx-auto my-10 shadow-xl">
      <CurrencyCalculator />
    </main>
  );
};

export default CurrencyConverter;
