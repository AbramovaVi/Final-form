import './App.css';
import {Form, Field} from 'react-final-form';

const submitHandler = () => {
  alert('succes');
}

const App = () => {
  return (
    <Form
      onSubmit={submitHandler}
      className='Form'
      initialValues={{ stooge: 'larry', employed: false }}
      render= {({ handleSubmit, form, submitting, pristine, values }) => (
      <form onSubmit={submitHandler}>
      <div>
        <label>Фамилия</label>
            <Field
              name="lastName"
              component="input"
              type="text"
              placeholder="Фамилия"
            />
      </div>
      <div>
        <label>Имя</label>
            <Field
              name="firstName"
              component="input"
              type="text"
              placeholder="Имя"
            />
      </div>
      <div>
        <label>Отчество</label>
            <Field
              name="middleName"
              component="input"
              type="text"
              placeholder="Отчество"
            />
      </div>
      <div>
        <label>Дата рождения</label>
            <Field
              name="birthDate"
              component="input"
              type="date"
            />
      </div>
      <div>
        <label>Возраст</label>
            <Field
              name="age"
              component="input"
              type="number"
            />
      </div>
      <div>
            <Field
              name="agreement"
              component="input"
              type="checkbox"
            />
            <label>Я согласен на обработку данных</label>
      </div>
      <button type='submit' disabled={submitting || pristine}>submit</button>
      </form>
    )}
    />
  );
}

export default App;
