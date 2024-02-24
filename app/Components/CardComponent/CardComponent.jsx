import React, { useContext } from 'react'
import { Avatar, Card, Tooltip } from '@mantine/core';
import cssClasses from './CardComponent.module.css'
import { IconAt, IconPhoneCall, IconWorld, IconUserPlus, IconTrash, IconUserMinus, IconStar } from '@tabler/icons-react'
import ButtonComponent from '../ButtonComponent/ButtonComponent'

export default function CardComponent({ user, followUser, unFollowUser, deleteUser }) {

    return (
        <>
            <Card className={cssClasses.card}>
                <a target='_blank' href={`https://${user.website}`}>
                    <Tooltip
                        label={user.username}
                        position="top"
                        withArrow
                        transitionProps={{ transition: 'pop-bottom-right' }}
                    >
                        <Avatar style={{ margin: 'auto' }} size={'xl'} src={`data:image/svg+xml;utf8,${encodeURIComponent(user.icon)}`}></Avatar>
                    </Tooltip>
                </a>
                <div className={cssClasses.userName}>
                    <p className={cssClasses.header}>{user.name}</p>
                    {user.follow &&
                        < IconStar className={cssClasses.icon} />
                    }
                </div>
                <div className={cssClasses.userInfo}>
                    <IconAt className={cssClasses.icon} />
                    <a target='_blank' href={`mailto:${user.email}`} className={cssClasses.info}>{user.email}</a>
                </div>
                <div className={cssClasses.userInfo}>
                    <IconPhoneCall className={cssClasses.icon} />
                    <a target='_blank' href={`tel:${user.phone}`} className={cssClasses.info}>{user.phone}</a>
                </div>
                <div className={cssClasses.userInfo}>
                    <IconWorld className={cssClasses.icon} />
                    <a target='_blank' className={cssClasses.info} href={`https://${user.website}`}>{user.website}</a>
                </div>
                <div className={cssClasses.btnWrapper}>
                    {user.follow ?
                        <ButtonComponent btnClicked={() => unFollowUser(user.id)} btnIcon={<IconUserMinus className={cssClasses.btnIcon} />} variant={'default'} name={'Unfollow'} />
                        :
                        <ButtonComponent btnClicked={() => followUser(user.id)} btnIcon={<IconUserPlus className={cssClasses.btnIcon} />} variant={'filled'} name={'Follow'} />
                    }
                    <ButtonComponent btnClicked={() => deleteUser(user.id)} btnIcon={<IconTrash className={cssClasses.btnIcon} />} variant={'outline'} name={'Delete'} />
                </div>
            </Card>
        </>
    )
}
