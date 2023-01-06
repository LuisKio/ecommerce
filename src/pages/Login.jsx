import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux'
import { loginUserThunk, logOutThunk } from '../store/slices/userInfo.slice';
import './styles/login.css'

const defaultValues = {
  email: '',
  password: ''
}

const Login = () => {
  const { token, user } = useSelector(state => state.userInfo);
  const { msgError } = useSelector(state => state.mesageError);
  const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm();



  const dispatch = useDispatch();

  const submit = (data) => {
    if (data.email || data.password) {
      dispatch(loginUserThunk(data));
    }
  }

  const handleClickLogOut = () => {
    dispatch(logOutThunk());
  }

  const handleDemo = () => {
    setValue('email', 'john@gmail.com');
    setValue('password', 'john1234');
  }

  const validationEmail = {
    required: true,
    pattern: {
      value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
      message: 'Error'
    }
  }

  const validationPassword = {
    required: true,
    minLength: 5
  }

  useEffect(() => {
    console.log('entro');
    reset(defaultValues);
  }, [user]);


  return (
    <main className='login'>
      {
        token ? (
          <div className="containerForm">
            <div className="containerForm__content">
              <section className='login__loged'>
                <i className='login__loged-icon bx bx-user'></i>
                <h3 className='containerForm__title'>{`${user.firstName} ${user.lastName}`}</h3>
                <div className='login__field'>
                  <button className='login__input login__btn ' onClick={handleClickLogOut} >Logout</button>
                </div>
              </section>
            </div>
          </div>

        ) : (
          <div className="containerForm">
            <div className="containerForm__content">
              <h3 className={`containerForm__title ${msgError && 'containerForm__title-error'}`}>{!msgError ? 'Sign in' : 'Sign in error'}</h3>

              <form className='login__form' onSubmit={handleSubmit(submit)}>
                <div className={`login__field ${errors.email && 'login__field-error'}`}>
                  <input className='login__input' type="email" name='email' placeholder={`${errors.email ? 'Email is required' : 'Email'}`} {...register('email', validationEmail)} />
                </div >

                <div className={`login__field ${errors.password && 'login__field-error'}`}>
                  <input className='login__input' type="password" name='password' placeholder={`${errors.password ? 'Password is required' : 'Password'}`} {...register('password', validationPassword)} />
                </div>
                <div className="login__field">
                  <button className='login__input login__btn'>Login</button>
                </div>
              </form >
            </div>

            <a onClick={handleDemo} className='btns demoEmail'><span>Demo Email</span> john@gmail.com</a>
            <a onClick={handleDemo} className='btns demoPass'><span>Demo Pass</span> john1234</a>
          </div>

        )
      }
    </main >
  )
}

export default Login