DiplomacyDialogPlayerControl.prototype.TributeButtonManager.prototype.TributeButton.prototype.update = function(playerInactive)
{
	this.button.hidden = playerInactive || g_Players[g_ViewedPlayer].isEnemy[this.playerID];

	if (!this.button.hidden)
		this.button.enabled = controlsPlayer(g_ViewedPlayer);
}
