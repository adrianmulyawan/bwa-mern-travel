import React from 'react';
import { Fade } from 'react-reveal';

import InputTextComponent from '../../components/Form/InputText/inputText.component';
import InputFileComponent from '../../components/Form/InputFile/inputFile.component';

import logoBca from '../../assets/images/logo_bca.png';
import logoMandiri from '../../assets/images/logo_mandiri.png';

const PaymentPart = (props) => {
  const { data, ItemDetails, checkout } = props;

  const tax = 10;
  const subTotal = ItemDetails.price * checkout.duration;
  const grandTotal = (subTotal * tax) / 100  + subTotal;

  return (
    <Fade>
      <div className="container" style={{ marginBottom: '30px' }}>
        <div className="row justify-content-center align-items-center">
          {/* Detail Payment */}
          <div className="col-lg-6 col-md-6 col-sm-12 border-right py-5" style={{ paddingRight: 80 }}>
            <Fade delay={300}>
              <p className='mb-4'>Transfer Pembayaran</p>
              <p>Tax: { tax }</p>
              <p>Sub Total: ${ subTotal }</p>
              <p>Tax: ${ grandTotal }</p>

              {/* Bca */}
              <div className="row mt-4">
                <div className="col-3 text-right">
                  <img src={logoBca} alt="bank central asia" width="60" />
                </div>
                <div className="col">
                  <dl>
                    <dd>Bank Central Asia</dd>
                    <dd>2208 1996</dd>
                    <dd>BuildWith Angga</dd>
                  </dl>
                </div>
              </div>

              {/* Mandiri */}
              <div className="row">
                <div className="col-3 text-right">
                  <img src={logoMandiri} alt="mandiri" width="60" />
                </div>
                <div className="col">
                  <dl>
                    <dd>Bank Mandiri</dd>
                    <dd>2208 1996</dd>
                    <dd>BuildWith Angga</dd>
                  </dl>
                </div>
              </div>
            </Fade>
          </div>
          {/* Form */}
          <div className="col-lg-6 col-sm-6 col-sm-12 py-5" style={{ paddingLeft: 80 }}>
            <Fade delay={600}>
              <label htmlFor="proofPayment">Upload Bukti Transfer</label>
              <InputFileComponent
                accept="image/*"
                id="proofPayment"
                name="proofPayment"
                value={data.proofPayment}
                onChange={props.onChange}
              />

              <label htmlFor="bankName">Asal Bank</label>
              <InputTextComponent
                id="bankName"
                name="bankName"
                type="text"
                value={data.bankName}
                onChange={props.onChange}
              />

              <label htmlFor="bankHolder">Nama Pengirim</label>
              <InputTextComponent
                id="bankHolder"
                name="bankHolder"
                type="text"
                value={data.bankHolder}
                onChange={props.onChange}
              />
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default PaymentPart;
