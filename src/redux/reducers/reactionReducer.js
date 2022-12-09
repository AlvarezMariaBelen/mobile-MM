import { createReducer } from "@reduxjs/toolkit";
import reactionAction from "../actions/reactionAction";

const { getReactions, updateReaction, deleteReaction, getMyReactions } =
  reactionAction;

const initialState = {
  reacted: [
    {
      name: "like",
      reacted: false,
    },
    {
      name: "love",
      reacted: false,
    },
    {
      name: "not-like",
      reacted: false,
    },
    {
      name: "surprise",
      reacted: false,
    },
  ],
  myReactions: [],
};

const reactionReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getReactions.fulfilled, (state, action) => {
      if (action.payload.success) {
        return {
          ...state,
          reactions: action.payload.data,
          cantReactions: action.payload.howManyReactions,
          idReaction: action.payload.id,
        };
      } else {
        return { ...state, reactions: [], cantReactions: {}, idReaction: "" };
      }
    })
    .addCase(updateReaction.fulfilled, (state, action) => {
      state.reacted.forEach((reaction) => {
        if (reaction.name === action.payload.name) {
          reaction.reacted = !reaction.reacted;
        }
      });
    })
    .addCase(getMyReactions.fulfilled, (state, action) => {
      return { ...state, myReactions: action.payload };
    })
    .addCase(deleteReaction.fulfilled, (state, action) => {
      console.log("action payload reaction", action.payload);
      return { ...state };
    });
});
export default reactionReducer;
