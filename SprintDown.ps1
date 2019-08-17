$ol = New-Object -ComObject Outlook.Application
$meeting = $ol.CreateItem('olAppointmentItem')
$meeting.Subject = 'Niedostępność środowiska Sprint BPMS'
$meeting.Body = ''
$meeting.Location = 'Virtual'
$meeting.ReminderSet = $true
$meeting.Importance = 1
$meeting.MeetingStatus = [Microsoft.Office.Interop.Outlook.OlMeetingStatus]::olMeeting
$meeting.Recipients.Add('SomeCorporateMail@Domain.pl')
$meeting.Recipients.Add('AnotherCorporateMail@Domain.pl')
$meeting.ReminderMinutesBeforeStart = 10
$meeting.Start = [datetime]::Now.AddMinutes(10)
$meeting.Duration = 15
$meeting.Send()

#Start-Sleep -s 30

#$mail = $ol.CreateItem('olMailItem')
#$mail.Subject = 'sss'
#$mail.Body = 'Test'
#$mail.To="YourCorporateMail@domain.pl"
#$mail.Send()

$ol.Quit() 
[System.Runtime.Interopservices.Marshal]::ReleaseComObject($ol) | Out-Null
#Read-Host -Prompt "Press Enter to exit"