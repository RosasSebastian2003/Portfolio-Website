'use client';

import { ArrowUpRight } from 'lucide-react';
import { motion, type Transition } from 'motion/react';
import { useMediaQuery } from 'react-responsive';

const notifications = [
    {
    id: 1,
    title: 'Linkedin',
    subtitle: 'Sebastian Rosas Maciel',
    url: 'https://www.linkedin.com/in/rossassebastian',
    icon: '/assets/icons/linkedin.png'
  },
  {
    id: 2,
    title: 'Github',
    subtitle: 'RosasSebastian2003',
    url: 'https://github.com/RosasSebastian2003',
    icon: '/assets/icons/github.png'
  },
  {
    id: 3,
    title: 'Gmail',
    subtitle: 'rmsebastian2003@gmail.com',
    url: 'mailto:rmsebastian2003@gmail.com',
    icon: '/assets/icons/gmail.png'
  }
];

const transition: Transition = {
  type: 'spring',
  stiffness: 300,
  damping: 26,
};

const getCardVariants = (i: number) => ({
  collapsed: {
    marginTop: i === 0 ? 0 : -44,
    scaleX: 1 - i * 0.05,
  },
  expanded: {
    marginTop: i === 0 ? 0 : 4,
    scaleX: 1,
  },
});

const textSwitchTransition: Transition = {
  duration: 0.22,
  ease: 'easeInOut',
};

const notificationTextVariants = {
  collapsed: { opacity: 1, y: 0, pointerEvents: 'auto' },
  expanded: { opacity: 0, y: -16, pointerEvents: 'none' },
};

const viewAllTextVariants = {
  collapsed: { opacity: 0, y: 16, pointerEvents: 'none' },
  expanded: { opacity: 1, y: 0, pointerEvents: 'auto' },
};

function NotificationList() {
  // Detectar si es móvil o tablet (< 1024px)
  const isMobileOrTablet = useMediaQuery({ maxWidth: 1024 });

  return (
    <>
    {isMobileOrTablet ? (
      <motion.div
      className="bg-neutral-900 p-3 rounded-3xl w-xs space-y-3 shadow-md shadow-white-500/10"
      initial="expanded"
      whileHover="expanded"
    >
      <div>
        {notifications.map((notification, i) => (
          <a href={notification.url} target="_blank" rel="noopener noreferrer">
            <motion.div
              key={notification.id}
              className="bg-neutral-800 rounded-xl px-4 py-2 shadow-sm shadow-white-500/20 hover:shadow-lg transition-shadow duration-200 relative"
              variants={getCardVariants(i)}
              transition={transition}
              style={{
                zIndex: notifications.length - i,
              }}
            >
              <div className='flex items-center'>
                <img src={notification.icon} alt="" className='w-6 h-6 mr-2' />
                <div>
                  <div className="flex justify-between items-center">
                    <h1 className="text-sm font-medium text-white">{notification.title}</h1>
                  </div>
                  <div className="text-xs text-white-700 font-medium">
                    <span>{notification.subtitle}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </a>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <div className="size-5 rounded-full bg-white text-neutral text-xs flex items-center justify-center font-medium">
          {notifications.length}
        </div>
        <span className="grid">
          <motion.span
            className="text-sm font-medium text-neutral-300 row-start-1 col-start-1"
            variants={notificationTextVariants}
            transition={textSwitchTransition}
          >
            My Social Media
          </motion.span>
          <motion.span
            className="text-sm font-medium text-neutral-300 flex items-center gap-1 cursor-pointer select-none row-start-1 col-start-1"
            variants={viewAllTextVariants}
            transition={textSwitchTransition}
          >
            View all <ArrowUpRight className="size-4" />
          </motion.span>
        </span>
      </div>
    </motion.div>
    ) : (
      <motion.div
      className="bg-neutral-900 p-3 rounded-3xl w-xs space-y-3 shadow-md shadow-white-500/10"
      initial="collapsed"
      whileHover="expanded"
    >
      <div>
        {notifications.map((notification, i) => (
          <a href={notification.url} target="_blank" rel="noopener noreferrer">
            <motion.div
              key={notification.id}
              className="bg-neutral-800 rounded-xl px-4 py-2 shadow-sm shadow-white-500/20 hover:shadow-lg transition-shadow duration-200 relative"
              variants={getCardVariants(i)}
              transition={transition}
              style={{
                zIndex: notifications.length - i,
              }}
            >
              <div className='flex items-center'>
                <img src={notification.icon} alt="" className='w-6 h-6 mr-2' />
                <div>
                  <div className="flex justify-between items-center">
                    <h1 className="text-sm font-medium text-white">{notification.title}</h1>
                  </div>
                  <div className="text-xs text-white-700 font-medium">
                    <span>{notification.subtitle}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </a>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <div className="size-5 rounded-full bg-white text-neutral text-xs flex items-center justify-center font-medium">
          {notifications.length}
        </div>
        <span className="grid">
          <motion.span
            className="text-sm font-medium text-neutral-300 row-start-1 col-start-1"
            variants={notificationTextVariants}
            transition={textSwitchTransition}
          >
            My Social Media
          </motion.span>
          <motion.span
            className="text-sm font-medium text-neutral-300 flex items-center gap-1 cursor-pointer select-none row-start-1 col-start-1"
            variants={viewAllTextVariants}
            transition={textSwitchTransition}
          >
            View all <ArrowUpRight className="size-4" />
          </motion.span>
        </span>
      </div>
    </motion.div>
    )}
    </>
  );
}

export { NotificationList };
