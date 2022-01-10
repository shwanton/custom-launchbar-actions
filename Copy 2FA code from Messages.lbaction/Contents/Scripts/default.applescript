on run
	set dbFilename to "$HOME/Library/Messages/chat.db"
	set sqlQueryString to "SELECT TEXT FROM message ORDER BY DATE DESC LIMIT 1"
	set regexString to "[0-9]{4,8}"
	
	set sqlCMD to "sqlite3 " & dbFilename & " " & quoted form of sqlQueryString
	set grepCMD to "grep -Eo " & quoted form of regexString & " | head -1"
	
	try
		set message to (do shell script sqlCMD)
		set code to (do shell script "echo " & quoted form of message & " | " & grepCMD)
		if code is "" then
			error "No code found"
		end if
		set the clipboard to code
		display notification "2FA code from last message copied to clipboard" with title "Success"
	on error errMsg
		display dialog ("Error getting 2FA code from last message: " & errMsg) buttons "OK" default button "OK"
	end try
end run
