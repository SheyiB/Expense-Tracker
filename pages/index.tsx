import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Login.module.css'
import Link from 'next/link';
import {useQuery, useQueryClient} from '@tanstack/react-query'
import Router from "next/router";
import {useState} from "react" ;
import { createGlobalState } from 'react-hooks-global-state'

const { setGlobalState, useGlobalState} = createGlobalState({ id: null, token: null, loggedInStatus: false, user: null, purchase: null});


export default function Home() {
//Token
//Logged In Status
//UserId

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [token, setToken] = useState('')

  const loginUser = async(email, password) => {
    const user = {email, password}
    console.log(user)
    const res = await fetch(`http://localhost:7000/api/v2/spendingApp/auth/login`,{
            method: 'POST',
            headers: {
                'Content-type' : 'application/json',
                'x-auth-token': ''
            },
            body: JSON.stringify(user),
        })
    console.log(res)
    return res;
  }

  const onSubmit = async(e) => {
        e.preventDefault()
        const res = await loginUser(email, password)
        const data = await res.json()

        //console.log(data)
        if(res.status == 201 ){
          console.log('Login Successful')

          const fetchData = async(id, data) =>{
            const user = await fetch(`http://localhost:7000/api/v2/spendingApp/users/${id}`, {
                method: 'GET',
                headers: {
                    'Content-type' : 'application/json',
                    'x-auth-token': data.token
                }
            }).then(response => response.json())

            const purchase = await fetch(`http://localhost:7000/api/v2/spendingApp/purchase?user=${id}`, {
                method: 'GET',
                headers: {
                    'Content-type' : 'application/json',
                    'x-auth-token': data.token
                }
            }).then(response => response.json())


            return {user, purchase}
        }

        const {user, purchase} = await fetchData(data.user._id, data)
        console.log(user.email)
           setGlobalState("id", data.user._id)
           setGlobalState("token", data.token)
           setGlobalState("loggedInStatus", true)
           setGlobalState("user", user)
           setGlobalState("purchase", purchase)

           setToken(data.token)
            Router.push({
            pathname: '/dashboard',
            //query: { id : data._id}
          });

         }
         else{
          console.log('Login Unsuccessful')
         }

        //If successful, show successful, if not show error
        //re route to login page
        //
  }

return (
    <div className={styles.container}>
      <Head>
        <title>Expense Tracker App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.logo}>

        </div>

        <div className={styles.content}>
          <h2>Expense Tracker App</h2>
          <h1>Login</h1>
          <form className={styles.form} onSubmit={onSubmit}>
            <input type="text" required onChange={(e) => setEmail(e.target.value)} placeholder="username"/>
            <input type="password" required onChange={(e) => setPassword(e.target.value)} placeholder="password"/>

            <button type="submit">Login</button>
            Read{' '}
            <p>New User?<Link href="/signup"><a>Sign Up</a></Link></p>
          </form>
        </div>
      </main>


    </div>
  )

}

export { useGlobalState, setGlobalState  };
