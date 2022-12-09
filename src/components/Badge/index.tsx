import React from 'react'

import { Container, Content, IconContainer } from './styles'
import { BadgeProps, BadgeType } from './types'

const Badge: React.FC<BadgeProps> = ({
  type,
  onClick,
  children,
  icon: Icon,
  onClickIcon
}) => {
  const variants = {
    hidden: {
      width: '0%',
      opacity: 0
    },
    visible: {
      width: '100%',
      opacity: 1,
      transition: {
        duration: 0.2,
        type: 'spring',
        damping: 25,
        stiffness: 500
      }
    },
    exit: {
      width: '0%',
      opacity: 0
    }
  }
  return (
    <Container
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.2 }}
      hasOnClick={!!onClick}
      variants={variants}
      type={type}
      icon={Icon}
    >
      <Content onClick={onClick}>{children}</Content>
      {Icon && (
        <IconContainer onClick={onClickIcon}>
          <Icon size={20} />
        </IconContainer>
      )}
    </Container>
  )
}

export type { BadgeProps, BadgeType }

export default Badge
