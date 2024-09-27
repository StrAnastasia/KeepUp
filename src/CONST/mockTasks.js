const STATUSES = {
  PENDING: "PENDING",
  DONE: "DONE",
  POSTPONED: "POSTPONED",
  CANCELED: "CANCELED",
};

const TASKS = [
  { status: STATUSES.PENDING, text: "some task you have to do", points: 0 },
  {
    status: STATUSES.DONE,
    text: "or maybe some more detailed description of wht you have to some really really long text, very detailed very thoughtfull very cutesy very planned",
    points: 0,
  },
  { status: STATUSES.POSTPONED, text: "some postponed task", points: 0 },
  { status: STATUSES.CANCELED, text: "some canceled task", points: 0 },
  {
    status: STATUSES.PENDING,
    text: "and this task has some bonus points!",
    points: 5,
  },
  {
    status: STATUSES.DONE,
    text: "and this task has some bonus points!",
    points: 5,
  },
];
export { STATUSES, TASKS };
