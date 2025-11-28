export const en = {
  common: {
    backToAssets: 'Back to assets',
  },

  tabs: {
    overview: 'Overview',
    messages: 'Messages',
  },

  messages: {
    emptyTitle: 'No messages yet',
    emptySubtitle: 'Be the first to start the conversation',
    inputPlaceholder: 'Type a message...',
    internalOnly: 'Make comment internal only',
  },

  media: {
    video: 'Video',
    thumbnail: 'Thumbnail',
    soundUsed: 'Sound Used',
    creatorsCaption: "Creator's Caption",
  },

  overview: {
    title: 'Overview',
    brand: 'Brand',
    briefName: 'Brief Name',
    fee: 'Fee',
    deadline: 'Deadline',
    deliverableTitle: 'Deliverable title',
    captionAndSoundInstructions: 'Caption & Sound Instructions',
  },

  status: {
    editStatus: 'Edit Status',
    updating: 'Updating...',
  },
} as const;

export type Locale = typeof en;
