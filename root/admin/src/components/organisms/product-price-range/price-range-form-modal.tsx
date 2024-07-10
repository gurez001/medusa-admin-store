import React, { useState } from "react";
import { Product } from "@medusajs/medusa";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Modal from "../../molecules/modal";
import { useTranslation } from "react-i18next";
import InputField from "../../molecules/input";
import FormValidator from "../../../utils/form-validator";
import Button from "../../fundamentals/button";
import { PlusMini } from "@medusajs/icons";
import useToggleState from "../../../hooks/use-toggle-state";
import useNotification from "../../../hooks/use-notification";

type Props = {
  product: Product;
  open: boolean;
  onClose: () => void;
  set_data_rows: React.Dispatch<React.SetStateAction<any[]>>;
  //   user: User
  //   onSuccess: () => void;
};

type EditUserModalFormData = {
  qnty_upto: string;
  qnty_price: string;
};

const PriceRangeFormModal: React.FC<Props> = ({
  product,
  open,
  onClose,
  set_data_rows,
}: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EditUserModalFormData>();
  const { t } = useTranslation();
  const notification = useNotification();
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const [rows, setRows] = useState<EditUserModalFormData[]>([]); // Initialize with an empty array

  // Example function to add a row
  const addRow = (data: EditUserModalFormData) => {
    const { qnty_upto } = data;

    let prev_qnty_upto_value: string = "0";
    if (rows.length > 0) {
      // Get the maximum value of qnty_upto from the existing rows
      const maxExistingValue = Math.max(
        ...rows.map((row) => parseInt(row.qnty_upto))
      );

      // Ensure the new min_pack_qnty is at least maxExistingValue + 1
      if (parseInt(qnty_upto) <= maxExistingValue) {
        notification(
          "Error",
          `Quantity up to  value should be greater than ${maxExistingValue}`,
          "error"
        );
        return;
      }
    }

    setRows((prevRows) => [...prevRows, data]);
    reset({
      qnty_upto: (parseInt(qnty_upto) + 50).toString(),
      qnty_price: "",
    });
  };

  const update = (data: EditUserModalFormData) => {
    const { qnty_upto } = data;

    let prev_qnty_upto_value: string = "0";
    if (prev_qnty_upto_value >= qnty_upto) {
      notification(
        "Error",
        "quantity up to value should be greater than min previous value",
        "error"
      );
      return;
    }

    if (editIndex !== null) {
      // Update existing row
      const updatedRows = [...rows];
      updatedRows[editIndex] = data;
      setRows(updatedRows);
      setEditIndex(null);
    }
    reset({
      qnty_upto: (parseInt(qnty_upto) + 50).toString(),
      qnty_price: "",
    });
  };

  useEffect(() => {
    if (rows && rows.length > 0) {
      set_data_rows(rows);
    }
  }, [rows]);

  const onSubmit = (e:any) => {
    e.preventDefault()
    console.log(rows)
  };
  const onReset = () => {
    onClose();
  };

  const handleEdit = (index: number) => {
    setEditIndex(index);
    const row = rows[index];
    reset(row); // Populate form fields with the selected row's data
  };
  return (
    <Modal open={open} handleClose={onReset} isLargeModal>
      <form >
        <Modal.Body>
          <Modal.Header handleClose={onReset}>
            <span className="inter-xlarge-semibold">
              {t("edit-pice-range-modal-edit-pice-range", "Edit Price")}
            </span>
          </Modal.Header>
          <Modal.Content>
            <div className="gap-large mb-base grid w-full grid-cols-3">
              <InputField
                label={t(
                  "edit-max-pack-qnty-modal-first-name-label",
                  "Quantity Up To"
                )}
                placeholder={t(
                  "edit-max-pack-qnty-modal-first-name-placeholder",
                  "Quantity Up To..."
                )}
                {...register("qnty_upto", {
                  required: FormValidator.required("Quantity Up To"),
                })}
                errors={errors}
              />

              <InputField
                label={t("edit-Price-modal-first-name-label", "Price")}
                placeholder={t(
                  "edit-Price-modal-first-name-placeholder",
                  "Price..."
                )}
                {...register("qnty_price", {
                  required: FormValidator.required("Price"),
                })}
                errors={errors}
              />
              {editIndex !== null ? (
                <Button
                  variant="ghost"
                  onClick={handleSubmit(update)}
                  size="small"
                  className="mr-2"
                >
                  Update
                </Button>
              ) : (
                <Button
                  variant="ghost"
                  onClick={handleSubmit(addRow)}
                  size="small"
                  className="mr-2"
                >
                  Add
                </Button>
              )}
            </div>
            <div>
              {rows &&
                rows.reverse().map((item, i) => (
                  <div
                    key={i}
                    // ddddddddddddddddddddddd
                    className={
                      i % 2 === 0
                        ? `px-1 pt-1 gap-large grid w-full grid-cols-4 border-b-2`
                        : `px-1 pt-1 bg-slate-200 gap-large grid w-full grid-cols-4 border-b-2`
                    }
                  >
                    <p> {i}).</p>

                    <p>{item.qnty_upto}</p>
                    <p>{item.qnty_price}</p>
                    <Button
                      variant="ghost"
                      onClick={() => handleEdit(i)}
                      size="small"
                      className="mr-2"
                    >           
                      Edit
                    </Button>
                  </div>
                ))}
            </div>
          </Modal.Content>
          <Modal.Footer>
            <div className="flex w-full justify-end">
              <Button
                // loading={isLoading}
                // disabled={isLoading}
                onClick={(e)=>onSubmit(e)}
                variant="primary"
                size="small"
              >
                {t("edit-user-modal-save", "Save")}
              </Button>
            </div>
          </Modal.Footer>
        </Modal.Body>
      </form>
    </Modal>
  );
};

export default PriceRangeFormModal;
