import React from "react";
import GooglePayButton from "@google-pay/button-react";
// import scan from "../../assets/images/scan.png";

const Pay = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">
        <div className="flex justify-center items-center">
          <img
            src={scan}
            alt="Scan"
            className="h-auto max-h-80 w-auto max-w-full"
          />
        </div>

        <div className="flex flex-col justify-center items-center space-y-8">
          <GooglePayButton
            environment="TEST"
            paymentRequest={{
              apiVersion: 2,
              apiVersionMinor: 0,
              allowedPaymentMethods: [
                {
                  type: "CARD",
                  parameters: {
                    allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                    allowedCardNetworks: ["MASTERCARD", "VISA"],
                  },
                  tokenizationSpecification: {
                    type: "PAYMENT_GATEWAY",
                    parameters: {
                      gateway: "example",
                      gatewayMerchantId: "exampleGatewayMerchantId",
                    },
                  },
                },
              ],
              merchantInfo: {
                merchantId: "12345678901234567890",
                merchantName: "Demo Merchant",
              },
              transactionInfo: {
                totalPriceStatus: "FINAL",
                totalPriceLabel: "Total",
                totalPrice: "100.00",
                currencyCode: "USD",
                countryCode: "US",
              },
            }}
            onLoadPaymentData={(paymentRequest) => {
              console.log("load payment data", paymentRequest);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Pay;
