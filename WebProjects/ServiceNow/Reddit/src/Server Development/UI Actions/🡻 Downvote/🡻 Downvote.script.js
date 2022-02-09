var currentVote = current.getValue("vote_count");
current.setValue("vote_count", currentVote -1);
current.update();