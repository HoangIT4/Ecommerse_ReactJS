import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

// Định nghĩa styles
const styles = {
  form: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px'
  },
  formGroup: {
    marginBottom: '1rem'
  },
  label: {
    display: 'block',
    marginBottom: '0.5rem',
    fontWeight: 'bold'
  },
  input: {
    width: '100%',
    padding: '0.375rem 0.75rem',
    fontSize: '1rem',
    lineHeight: '1.5',
    border: '1px solid #ced4da',
    borderRadius: '0.25rem'
  },
  invalidInput: {
    borderColor: '#dc3545'
  },
  formRow: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '0 -15px'
  },
  formGroupCol: {
    flex: '0 0 33.333%',
    maxWidth: '33.333%',
    padding: '0 15px',
    marginBottom: '1rem'
  },
  select: {
    width: '100%',
    padding: '0.375rem 0.75rem',
    fontSize: '1rem',
    border: '1px solid #ced4da',
    borderRadius: '0.25rem'
  },
  invalidFeedback: {
    color: '#dc3545',
    fontSize: '80%',
    marginTop: '0.25rem'
  },
  formCheck: {
    marginBottom: '0.5rem'
  },
  radioInput: {
    marginRight: '0.5rem'
  },
  button: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '0.25rem',
    cursor: 'pointer',
    width: '100%'
  }
};

const BillDetail = ({ formState, setFormState, handleSubmit }) => {
  // Xác thực với Yup
  const validationSchema = Yup.object({
    fullName: Yup.string().required('Họ và Tên là bắt buộc'),
    email: Yup.string().email('Email không hợp lệ').required('Email là bắt buộc'),
    phoneNumber: Yup.string().required('Số điện thoại là bắt buộc'),
    address: Yup.string().required('Địa chỉ là bắt buộc'),
    city: Yup.string().required('Tỉnh/Thành là bắt buộc'),
    district: Yup.string().required('Quận/Huyện là bắt buộc'),
    ward: Yup.string().required('Phường/Xã là bắt buộc'),
    paymentMethod: Yup.string().required('Vui lòng chọn phương thức thanh toán'),
  });

  const handleFormSubmit = (values) => {
    setFormState(values);
    handleSubmit();
  };
  return (
    <Formik
        initialValues={formState}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
    >
      {({ handleSubmit, handleChange, values, errors, touched }) => (
        <form onSubmit={handleSubmit} style={styles.form}>
          {/* Thông tin cá nhân */}
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="fullName">Họ và Tên</label>
            <input
              type="text"
              name="fullName"
              value={values.fullName}
              onChange={handleChange}
              style={{
                ...styles.input,
                ...(errors.fullName && touched.fullName ? styles.invalidInput : {})
              }}
            />
            {errors.fullName && touched.fullName && (
              <div style={styles.invalidFeedback}>{errors.fullName}</div>
            )}
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              style={{
                ...styles.input,
                ...(errors.email && touched.email ? styles.invalidInput : {})
              }}
            />
            {errors.email && touched.email && (
              <div style={styles.invalidFeedback}>{errors.email}</div>
            )}
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="phoneNumber">Số điện thoại</label>
            <input
              type="text"
              name="phoneNumber"
              value={values.phoneNumber}
              onChange={handleChange}
              style={{
                ...styles.input,
                ...(errors.phoneNumber && touched.phoneNumber ? styles.invalidInput : {})
              }}
            />
            {errors.phoneNumber && touched.phoneNumber && (
              <div style={styles.invalidFeedback}>{errors.phoneNumber}</div>
            )}
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="address">Địa chỉ</label>
            <input
              type="text"
              name="address"
              value={values.address}
              onChange={handleChange}
              style={{
                ...styles.input,
                ...(errors.address && touched.address ? styles.invalidInput : {})
              }}
            />
            {errors.address && touched.address && (
              <div style={styles.invalidFeedback}>{errors.address}</div>
            )}
          </div>

          Địa chỉ chi tiết
          <div style={styles.formRow}>
            <div style={styles.formGroupCol}>
              <label style={styles.label} htmlFor="city">Tỉnh/Thành</label>
              <select
                name="city"
                onChange={handleChange}
                value={values.city}
                style={{
                  ...styles.select,
                  ...(errors.city && touched.city ? styles.invalidInput : {})
                }}
              >
                <option value="">Chọn tỉnh/thành</option>
                <option value="Hanoi">Hà Nội</option>
                <option value="HCM">TP. Hồ Chí Minh</option>
              </select>
              {errors.city && touched.city && (
                <div style={styles.invalidFeedback}>{errors.city}</div>
              )}
            </div>

            <div style={styles.formGroupCol}>
              <label style={styles.label} htmlFor="district">Quận/Huyện</label>
              <select
                name="district"
                onChange={handleChange}
                value={values.district}
                style={{
                  ...styles.select,
                  ...(errors.district && touched.district ? styles.invalidInput : {})
                }}
              >
                <option value="">Chọn quận/huyện</option>
                <option value="Q1">Quận 1</option>
                <option value="Q2">Quận 2</option>
              </select>
              {errors.district && touched.district && (
                <div style={styles.invalidFeedback}>{errors.district}</div>
              )}
            </div>

            <div style={styles.formGroupCol}>
              <label style={styles.label} htmlFor="ward">Phường/Xã</label>
              <select
                name="ward"
                onChange={handleChange}
                value={values.ward}
                style={{
                  ...styles.select,
                  ...(errors.ward && touched.ward ? styles.invalidInput : {})
                }}
              >
                <option value="">Chọn phường/xã</option>
                <option value="Ward1">Phường 1</option>
                <option value="Ward2">Phường 2</option>
              </select>
              {errors.ward && touched.ward && (
                <div style={styles.invalidFeedback}>{errors.ward}</div>
              )}
            </div>
          </div>

          {/* Phương thức thanh toán */}
          <div style={styles.formGroup}>
            <label style={styles.label}>Phương thức thanh toán</label>
            <div style={styles.formCheck}>
              <input
                type="radio"
                id="payment-cod"
                name="paymentMethod"
                value="cod"
                onChange={handleChange}
                checked={values.paymentMethod === 'cod'}
                style={styles.radioInput}
              />
              <label htmlFor="payment-cod">Thanh toán khi nhận hàng</label>
            </div>
            {/* <div style={styles.formCheck}>
              <input
                type="radio"
                id="payment-credit"
                name="paymentMethod"
                value="credit"
                onChange={handleChange}
                checked={values.paymentMethod === 'credit'}
                style={styles.radioInput}
              />
              <label htmlFor="payment-credit">Thanh toán bằng thẻ tín dụng</label>
            </div>
            <div style={styles.formCheck}>
              <input
                type="radio"
                id="payment-banking"
                name="paymentMethod"
                value="banking"
                onChange={handleChange}
                checked={values.paymentMethod === 'banking'}
                style={styles.radioInput}
              />
              <label htmlFor="payment-banking">Thanh toán bằng ngân hàng</label>
            </div> */}
            {errors.paymentMethod && touched.paymentMethod && (
              <div style={styles.invalidFeedback}>{errors.paymentMethod}</div>
            )}
          </div>

          {/* Nút submit */}
         
        </form>
      )}
    </Formik>
  );
};

export default BillDetail;