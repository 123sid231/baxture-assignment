import { Button } from '@mantine/core'
import React, { useContext } from 'react'

export default function ButtonComponent({ name, variant, btnIcon, btnClicked }) {

    return (
        <Button onClick={btnClicked} fullWidth leftSection={btnIcon} variant={variant} >{name}</Button>
    )
}
