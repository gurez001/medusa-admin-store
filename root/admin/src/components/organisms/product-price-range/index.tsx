import React, { useState } from "react";
import { Product } from "@medusajs/medusa";
import { useTranslation } from "react-i18next";
import useToggleState from "../../../hooks/use-toggle-state";
import { ActionType } from "../../molecules/actionables";
import Section from "../../organisms/section";
import PriceRangeFormModal from "./price-range-form-modal";
type Props = {
  product: Product;
};

const ProductPriceRange = ({ product }: Props) => {
  const { state, close, toggle } = useToggleState();
  const { t } = useTranslation();
  const [rows, set_data_rows] = useState<any[]>([]);
  const actions: ActionType[] = [
    {
      label: t("product-prce-range-section-edit", "Edit Range"),
      onClick: toggle,
    },
  ];

  return (
    <>
      <Section title="Price Range" actions={actions}>
        <div className="mt-3">
          <div className="px-1 pt-1 bg-slate-200 gap-large grid w-full grid-cols-3 border-b-2">
            <p> No.</p>

            <p>Quantity Up To</p>
            <p>Price</p>
          </div>
          {rows &&
            rows.reverse().map((item, i) => (
              <div
                key={i}
                // ddddddddddddddddddddddd
                className={
                  i % 2 === 0
                    ? `px-1 pt-1 gap-large grid w-full grid-cols-3 border-b-2`
                    : `px-1 pt-1 bg-slate-200 gap-large grid w-full grid-cols-3 border-b-2`
                }
              >
                <p> {i}).</p>

                <p>{item.qnty_upto}</p>
                <p>₹{item.qnty_price}</p>
                {/* <Button
                      variant="ghost"
                      onClick={() => handleEdit(i)}
                      size="small"
                      className="mr-2"
                    >
                      Edit
                    </Button> */}
              </div>
            ))}
        </div>
      </Section>
      <PriceRangeFormModal
        product={product}
        open={state}
        onClose={close}
        set_data_rows={set_data_rows}
      />
    </>
  );
};

export default ProductPriceRange;
