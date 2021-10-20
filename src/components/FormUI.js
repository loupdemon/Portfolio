//libraries and hooks
//assets
//components
import { Button } from "./Button";
import { Loader } from "./Loader";

export const FormUI = ({ onChange, onSubmit, status, formData: { name, email, message } }) => {
   return (
      <>
         <p>Or send me an email!</p>
         <form className="Form" onSubmit={onSubmit}>
            <label htmlFor='name' className='input'>
               <span className='input__label'>Your name</span>
               <input
                  id='name'
                  type='text'
                  name='name'
                  className='input__field'
                  autoComplete='off'
                  value={name}
                  onChange={onChange}
                  required
               />
            </label>
            <label htmlFor='email' className='input'>
               <span className='input__label'>Your email address</span>
               <input
                  id='email'
                  type='email'
                  name='email'
                  className='input__field'
                  autoComplete='off'
                  value={email}
                  onChange={onChange}
                  required
               />
            </label>
            <label htmlFor='message' className='input'>
               <span className='input__label'>Your incredible ideas 💫</span>
               <textarea
                  id='message'
                  name='message'
                  className='input__field'
                  value={message}
                  onChange={onChange}
                  required
               ></textarea>
            </label>
            {status === 'sent' && <p>the message was succesfully sent!</p>}
            {status === 'error' && <p>the message couldn't be sent, please try again later...</p>}
            <Button size='large' disabled={status === 'loading' && true}>
               {status === 'initial' && 'Send it!'}
               {status === 'error' && 'Send it!'}
               {status === 'sent' && 'Send it!'}
               {status === 'loading' && <Loader />}
            </Button>
         </form>
      </>
   );
};