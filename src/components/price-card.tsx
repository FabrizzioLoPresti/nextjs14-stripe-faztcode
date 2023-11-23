import ButtonCheckout from './button-checkout';

type Props = {
  price: any;
};

const PriceCard = ({ price }: Props) => {
  return (
    <div className="bg-slate-600 p-6">
      <h2>{price.nickname}</h2>
      <p>${price.unit_amount / 100}</p>
      <ButtonCheckout priceId={price.id} />
    </div>
  );
};

export default PriceCard;
