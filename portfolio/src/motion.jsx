import { motion } from 'framer-motion'
import { easeOut, fadeUp } from './anim'

/* =========================================================
   <Animate> — drop-in wrapper that reveals on scroll
   ========================================================= */
export function Animate({
  children,
  variants = fadeUp,
  className = '',
  as = 'div',
  delay = 0,
  amount = 0.2,
  once = true,
  ...rest
}) {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      transition={{ delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}

/* =========================================================
   <AnimatedText> — splits into words/chars and animates each
   ========================================================= */
export function AnimatedText({
  text,
  by = 'word',
  className = '',
  as = 'span',
  stagger: s = 0.04,
  delay = 0,
  once = true,
  y = 28,
}) {
  const units = by === 'char' ? Array.from(text) : text.split(' ')
  const MotionTag = motion[as] || motion.span

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: s, delayChildren: delay } },
  }
  const child = {
    hidden: { opacity: 0, y, rotateX: -40 },
    show: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  }

  return (
    <MotionTag
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.4 }}
      style={{ display: 'inline-block', perspective: 600 }}
      aria-label={text}
    >
      {units.map((u, i) => (
        <motion.span
          key={i}
          variants={child}
          aria-hidden="true"
          style={{ display: 'inline-block', whiteSpace: 'pre' }}
        >
          {u}
          {by === 'word' && i < units.length - 1 ? ' ' : ''}
        </motion.span>
      ))}
    </MotionTag>
  )
}
