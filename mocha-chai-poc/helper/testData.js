/* eslint no-unused-vars: off */
/* eslint prefer-const: off */

let customerBody = (
  {
    data: {
      customer_type: 2,
      customer: {
        name: 'PT. Mocha Test',
        email: 'tester.bizzy+ptdj100102@gmail.com',
        account_manager: 49029,
        npwp: '',
        telephone_number: '+6281223331433',
        fax: '+6281223331434',
        rebate: 10,
        allowed_payment: '14',
        credit_limit: '50000001',
        credit_limit_currency: 'IDR',
        invoice_type: 0,
      },
      addresses: [{
        status: 1,
        label: 'PT. DJ 100101',
        country_id: 'ID',
        region_name: 'Jakarta',
        city: 'Jakarta Selatan',
        district: 'Tebet',
        subdistrict: 'Tebet Barat',
        postcode: '12810',
        street1: 'Jl. Industri 1A',
        street2: 'Kec. Seberang Kel. Jalan',
        name: 'Rec 1',
        dest_company_name: 'PT. DJ 100101',
        npwp: '',
        telephone_number: '+6281223331433',
        external_default_billing: true,
        external_default_shipping: true,
        is_select: false,
      }],
    },
  });

let cartNewBody = ({
  session_id: '',
  user_name: 'Djoko',
  user_email: 'djoko.haryono@bizzy.co.id',
});

let addItemBody = ({
  session_id: '',
  items: {
    configurable_id: 746,
    simple_id: 747,
    sku: '1IokDeEewczrr6p7vbEC',
    description: 'Black 128Gb',
    vendor: {
      id: '106152',
      name: 'PT DJ MC1 Sub1',
    },
    uom: 'unit',
    qty: 2,
    weight: 2,
    purchase_price: 12543737,
    sales_price: 10000000,
  },
});

let addActivityLog = ({
  source: '',
  name: 'mochachaitest name',
  description: 'mochachaitest description',
  action: '',
  module_name: 'mochachaitest module name',
  data: '{"original":"{"name":"old_name"},{"new_value":"{"name":"new name"}"}',
});

module.exports = {
  customerBody,
  cartNewBody,
  addItemBody,
  addActivityLog,
};
