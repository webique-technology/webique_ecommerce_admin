import { useState } from "react";
import { useParams } from "react-router-dom";

import ProductStepper from "./components/ProductStepper";

import Step1Basic from "./steps/Step1Basic";
import Step2CategoryAttributes from "./steps/Step2CategoryAttributes";
import Step3SimpleProduct from "./steps/Step3SimpleProduct";
import Step3VariableProduct from "./steps/Step3VariableProduct";
import Step4PublishSeo from "./steps/Step4PublishSeo";
import { useEffect } from "react";

export default function ProductForm() {

  const { id } = useParams();

  const isEdit = !!id;

  const [step, setStep] = useState(1);

  const [productId, setProductId] = useState(id || null);

  const [productType, setProductType] = useState("");
  const [variantAttributes, setVariantAttributes] = useState([]);

  const nextStep = () => {

    setStep((prev) => prev + 1);

  };

  const previousStep = () => {

    setStep((prev) => prev - 1);

  };
  useEffect(() => {

    console.log("Variant Attributes :", variantAttributes);

  }, [variantAttributes]);

  return (

    <div className="space-y-6 p-6">

      <ProductStepper
        currentStep={step}
      />

      {step === 1 && (

        <Step1Basic

          isEdit={isEdit}

          productId={productId}

          setProductId={setProductId}

          productType={productType}

          setProductType={setProductType}

          nextStep={nextStep}

        />

      )}

      {step === 2 && (

        <Step2CategoryAttributes

          productId={productId}
          isEdit={isEdit}
          nextStep={nextStep}

          previousStep={previousStep}
          setVariantAttributes={setVariantAttributes}

        />

      )}

      {(step === 3) && (productType === "simple") ? (
        <Step3SimpleProduct
          productId={productId}
          previousStep={() => setStep(2)}
          nextStep={() => setStep(4)}
          isEdit={isEdit}
        />
      ) : (
        (step === 3) && (
          <Step3VariableProduct
            productId={productId}
            attributes={variantAttributes}
            previousStep={() => setStep(2)}
            nextStep={() => setStep(4)}
            isEdit={isEdit}
          />
        )
      )}

      {/* {step === 3 && productType === "simple" && (
        <Step3SimpleProduct
          productId={productId}
          nextStep={nextStep}
          previousStep={previousStep}
        />
      )}

      {step === 3 && productType === "variable" && (
        <Step3VariableProduct
          productId={productId}
          nextStep={nextStep}
          previousStep={previousStep}
        />
      )} */}



      {step === 4 && (

        <Step4PublishSeo

          productId={productId}
          isEdit={isEdit}
          previousStep={previousStep}

        />

      )}

    </div>

  );

}