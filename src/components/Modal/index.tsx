import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { useOnClickOutside } from 'usehooks-ts'

import { Container, Content } from './styles'

export type ModalProps = {
  isOpen: boolean
  onClose: () => void
}
const Modal: React.FC<ModalProps & { children: React.ReactNode }> = ({
  children,
  onClose,
  isOpen
}) => {
  const contentRef = useRef<HTMLDivElement>(null)
  const variants = {
    hidden: {
      y: '-100vh',
      opacity: 0
    },
    visible: {
      y: '0',
      opacity: 1,
      transition: {
        duration: 0.1,
        type: 'spring',
        damping: 25,
        stiffness: 500
      }
    },
    exit: {
      y: '100vh',
      opacity: 0
    }
  }

  useOnClickOutside(contentRef, onClose)

  if (!isOpen) return <div />

  return (
    <Container
      className="backdrop"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={variants}
      >
        <Content ref={contentRef}>{children}</Content>
      </motion.div>
    </Container>
  )
}

export default Modal
