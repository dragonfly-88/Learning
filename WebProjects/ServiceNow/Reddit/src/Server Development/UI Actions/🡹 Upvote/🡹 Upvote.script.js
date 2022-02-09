var currentVote = current.getValue("vote_count");
current.setValue("vote_count", ++currentVote);
current.update();
