"use client"
import { Grid, Container, GridCol } from '@mantine/core';
import cssClasses from './page.module.css'
import { useEffect, useState } from 'react';
import CardComponent from './Components/CardComponent/CardComponent';
import useFetch from './CustomHooks/useFetch'
import axios from 'axios';

export default function HomePage() {

  const [users, setUsers] = useState(Array)
  const [callApi] = useFetch()

  useEffect(() => {
    callApi('https://jsonplaceholder.typicode.com/users', "GET").then(async (users) => {
      for (const ele of users) {
        await callApi(`https://api.dicebear.com/7.x/initials/svg?seed=${ele.name}`, "GET").then((icon) => {
          ele.icon = icon
        })
      }
      console.log(users)
      setUsers(users)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  function followUser(userId: string) {
    setUsers(users.map((m: any) => {
      if (m.id === userId) {
        return {
          ...m,
          follow: true
        }
      } else {
        return m
      }
    }))
  }

  function unFollowUser(userId: string) {
    setUsers(users.map((m: any) => {
      if (m.id === userId) {
        return {
          ...m,
          follow: false
        }
      } else {
        return m
      }
    }))
  }

  function deleteUser(userId: string) {
    setUsers(users.filter((ele: any) => ele.id !== userId))
  }

  return (
    <Container className={cssClasses.container}>
      <Grid>
        {users.map((m: any) => (
          <GridCol key={m.id} span={{ base: 12, xs: 3 }}>
            <CardComponent user={m} followUser={followUser} deleteUser={deleteUser} unFollowUser={unFollowUser} />
          </GridCol>
        ))
        }
      </Grid>
    </Container>
  );
}