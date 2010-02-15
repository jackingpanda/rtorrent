﻿/*
 * WebUI - The WEB interface for uTorrent - http://www.utorrent.com
 * NO COPYCATS of language update
 * 
 * == BEGIN LICENSE ==
 * 
 * Licensed under the terms of any of the following licenses at your
 * choice:
 * 
 *  - GNU General Public License Version 2 or later (the "GPL")
 *    http://www.gnu.org/licenses/gpl.html
 * 
 *  - GNU Lesser General Public License Version 2.1 or later (the "LGPL")
 *    http://www.gnu.org/licenses/lgpl.html
 * 
 *  - Mozilla Public License Version 1.1 or later (the "MPL")
 *    http://www.mozilla.org/MPL/MPL-1.1.html
 * 
 * == END LICENSE ==
 * 
 * File Name: it.js
 * 	Italian language file.
 * 
 * File Author:
 * 		Tibi Diego (ceres@divxmania.it)
 */
 
 var theUILang =
 {
 //all used
 kbs				: "kB/s",
 
 
 //Settings window
 
 General			: "Generale",
 Downloads			: "Download",
 Connection			: "Connessioni",
 BitTorrent			: "BitTorrent",
 Queueing			: "Coda",
 Scheduler			: "Pianificatore",
 Advanced			: "Avanzate",
 Disk_Cache			: "Cache su Disco",
 Enable_Web_Interface : "Attiva Interfaccia Web",
 Authent			: "Autenticazione",
 Username			: "Username",
 Password			: "Password",
 Enable_Guest_acc	: "Attiva account Ospite, con username",
 Connectivity		: "Connettività",
 Alt_list_port		: "Porta di ascolto alternativa (per default è la porta di bittorrent)",
 Rest_access		: "Restringi l'accesso ai seguenti IP (Separa gli IP con ,)",
 User_Interface		: "Interfaccia Utente",
 Confirm_del_torr	: "Conferma prima di cancellare",
 Update_GUI_every	: "Aggiorna i dati ogni",
 ms					: "ms",
 Alt_list_bckgnd	: "Alterna i colori di sfondo nelle liste",
 Show_speed			: "Mostra velocità",
 Don_t				: "No",
 In_status_bar		: "Nella barra di stato",
 In_title_bar		: "Nel titolo",
 Show_cat_start		: "Mostra categorie all'avvio",
 Virt_row_thres		: "Limite di righe virtuali",
 Show_det_start		: "Mostra dettagli all'avvio",
 Restor_def			: "Ripristina ai valori iniziali",
 When_add_torrent	: "Quando aggiungi un torrent",
 Dnt_start_down_auto: "Non iniziare il download automaticamente",
 Other_sett			: "Altre impostazioni",
 Append_ut_incompl	: "Aggiungi .!ut ai file incompleti",
 Prealloc_all_files	: "Pre-alloca tutti i file",
 Prev_stnd_w_act_con: "Non entrare in stand by se ci sono torrent attivi",
 Listening_Port		: "Porta di ascolto",
 Port_f_incom_conns	: "Porta usata per le connessioni in ingresso",
 Random_Port		: "Porta Casuale",
 Rnd_port_torr_start: "Selezione casuale della porta ad ogni avvio di rTorrent",
 En_UPnP_mapp		: "Abilita UPNP",
 Add_torr_mustdie_f	: "Aggiungi rTorrent alle eccezioni del firewall di XP (Solo XP SP2)",
 Proxy_Server		: "Server Proxy",
 Type				: "Tipo",
 none				: "(nessuno)",
 Proxy				: "Proxy",
 Port				: "Porta",
 Use_proxy_4_p2p_con: "Usa il server proxy per le connessioni peer-to-peer",
 Bandwidth_Limiting : "Limitazione Banda",
 Global_max_upl		: "Velocità massima di UL",
 unlimited			: "illimitata",
 Alt_down_r_downl	: "Velocità di UL alternativa quando non si sta scaricando",
 Glob_max_downl		: "Velocità massima di DL",
 Num_of_conn		: "Numero di Connessioni",
 Glob_max_conn		: "Numero massimo di connessioni",
 Max_conn_peer_torr	: "Numero massimo di peer connessi per torrent",
 Num_upl_slots		: "Numero di slot di UL per torrent",
 Extra_ulslots		: "Aggiungi slot se la velocità di UL è minore del < 90%",
 Add_bittor_featrs	: "Opzioni BitTorrent Aggiuntive",
 En_DHT_ntw			: "Abilita la rete DHT",
 Ask_scrape			: "Chiedi al tracker informazioni scrape",
 En_DHT_new_torrs	: "Abilita DHT per i nuovi torrents",
 Peer_exch			: "Abilita scambio peer",
 Ip_report_track	: "IP/Nome Host da riportare al tracker",
 Protocol_enc		: "Cifratura protocollo",
 Outgoing			: "In uscita",
 Disabled			: "Disattivata",
 Enabled			: "Attivata",
 Forced				: "Forzata",
 All_inc_legacy_conn: "Permetti conn. non cifrate in arrivo",
 Queue_sett			: "Impostazioni coda",
 Max_n_act_torrs	: "Massimo numero di torrent attivi (in upload o download)",
 Max_num_act_downl	: "Massimo numero di download attivi",
 Seed_while			: "Condividi finchè [Valori Prefefiniti]",
 Ratio_is			: "Il rapporto è",
 or_time_is			: " % o il tempo di seed è",
 Ignore				: "(Ignora)",
 nin_min			: "90 minuti",
 two_h				: "2 ore",
 three_h			: "3 ore",
 four_h				: "4 ore",
 five_h				: "5 ore",
 six_h				: "6 ore",
 seven_h			: "7 ore",
 eight_h			: "8 ore",
 nine_h				: "9 ore",
 ten_h				: "10 ore",
 twelve_h			: "12 ore",
 sixteen_h			: "16 ore",
 twenty_h			: "20 ore",
 tw_four_h			: "24 ore",
 thirty_h			: "30 ore",
 thirty_six_h		: "36 ore",
 forty_eight_h		: "48 ore",
 sixty_h			: "60 ore",
 sev_two_h			: "72 ore",
 nin_six_h			: "96 ore",
 Seed_prior			: "Usa una priorità maggiore per il seeding rispetto al download",
 When_torr_reach	: "Quando rtorrent ha raggiunto la quota di seeding impostata",
 Limit_upl_rate		: "Limita upload a [0 ferma il torrent]",
 En_shedul			: "Abilita pianificatore",
 Shed_sett			: "Impostazioni pianificatore",
 Lim_upl_rate		: "Upload limitato a",
 Lim_dow_rate		: "Download limitato a",
 Dis_DHT_when_t_off	: "Disabilita DHT quando spento",
 Disc_cahe			: "Cache Disco",
 Disc_cahe_bla_bla	: "La cache del disco tiene i dati con gli accessi più frequenti in memoria per ridurre il numero di letture e scritture dal disco rigido. La gestione è automatica ma è possibile cambiarne il comportamento modificando queste impostazioni.",
 Overwr_d_cahe_au	: "Scavalca il dimens. auto. della cache e specificala manualmente:",
 MB					: "MB",
 Red_mem_usage		: "Riduci l'uso della memoria quando la cache non è necessaria",
 Adv_cache_sett		: "Opzioni avanzate cache",
 En_cach_disc		: "Abilita la cache in scrittura",
 Wr_out_ever_2_min	: "Scrivi i blocchi di dati non toccati ogni 2 minuti",
 Wr_immed			: "Scrivi subito le parti completate",
 En_cah_disc_read	: "Abilita la cache in lettura",
 Turn_off_w_read	: "Spegni la cache in lettura se la velocità di upload è lenta",
 Rem_old_from_cahe	: "Rimuovi i vecchi blocchi dalla cache",
 Increase_autom_cach: "Aumenta la dimensione della cache quando necessario",
 Advanced			: "Avanzate",
 Advanced_label		: "Opzioni avanzate [ATTENZIONE: Non modificare!]",
 Cancel				: "Annulla",
 uTorrent_settings	: "Opzioni rTorrent",
 
// Main window
 Doesnt_support		: "L'interfaccia ruTorrent non supporta il tuo browser.",
 Name				: "Nome",
 Status				: "Stato",
 Size				: "Dimensione",
 Done				: "Completati",
 Downloaded			: "Scaricati",
 Uploaded			: "Inviati",
 Ratio				: "Rapporto",
 DL					: "DL",
 UL					: "UL",
 ETA				: "ETA",
 Label				: "Etichetta",
 Peers				: "Peer",
 Seeds				: "Seed",
 Avail				: "Disp.",
 Remaining			: "Rimanenti",
 Priority			: "Priorità",
 Download			: "Download",
 Upload				: "Upload",
 Not_torrent_file	: "Il file deve essere un torrent.",
 Pausing			: "In pausa",
 Seeding			: "In seed",
 Downloading		: "In Download",
 Checking			: "In Controllo",
 Error				: "Errore",
 Queued				: "In coda",
 Finished			: "Completato",
 Stopped			: "Arrestato",
 Request_timed_out	: "La richiesta a rTorrent è andata in time out.",
 
 Force_Start		: "Forza Avvio",
 Start				: "Avvia",
 Pause				: "Pausa",
 Stop				: "Ferma",
 Force_recheck		: "Forza Ricontrollo",
 New_label			: "Nuova Etichetta...",
 Remove_label		: "Elimina Etichetta",
 Labels				: "Etichette",
 Remove				: "Rimuovi",
 Delete_data		: "Cancella Dati",
 Remove_and			: "Rimuovi e",
 Details			: "Dettagli...",
 Properties			: "Proprietà...",
 of					: "di",		//this two creates line 
 connected			: "connessi",	//  XX of YY connected
 High_priority		: "Alta",
 Normal_priority	: "Normale",
 Low_priority		: "Bassa",
 Dont_download		: "Non scaricare",
 Shure_restore_UI	: "Sei certo di voler ripristinare l'interfaccia utente?",
 Reloading			: "Ricaricamento...",
 Name				: "Nome",
 Date_				: "Data",
 Files				: "File",
 Logger				: "Eventi",
 
 s					: "s",    // part of "KB/s"
 bytes				: "bytes",
 KB					: "KB",
 MB					: "MB",
 GB					: "GB",
 TB					: "TB",
 PB					: "PB",
 
 // main WND s
 Loading			: "Apertura...",
 Torrent_file		: "File Torrent",
 Torrent_URL		: "URL Torrent",
 Cookies			: "Cookie",
 RSS_Downloader		: "Pianificatore RSS",
 Torrent_properties	: "Proprietà Torrent",
 Trackers			: "Tracker",
 Max_down_rate		: "Velocità massima di download",
 Max_upl_rate		: "Velocità massima di upload",
 Bandwidth_sett		: "Impostazioni di banda",
 Number_ul_slots	: "Numero di slot di Upload",
 Override_default	: "Scavalca impostazioni predefinite",
 Initial_seed		: "Seeding Iniziale",
 Enable_DHT			: "Abilita DHT",
 Peer_ex			: "Abilita scambio peer",
 About				: "Informazioni su",
 Enter_label_prom	: "Inserisci la nuova etichetta per i torrent selezionati",
 Remove_torrents	: "Rimuovi torrent",
 Rem_torrents_prompt: "Vuoi veramente rimuovere i torrent selezionati?",
 All				: "Tutti",
 Active				: "Attivi",
 Inactive			: "Inattivi",
 No_label			: "Nessuna Etchetta",
 Transfer			: "Trasferimento",
 Time_el			: "Tempo Trascorso",
 Remaining			: "Rimasti",
 Share_ratio		: "Rapporto",
 Down_speed			: "Velocità DL",
 Down_limit			: "Limite DL",
 Ul_speed			: "Velocità UL",
 Ul_limit			: "Limite UL",
 Wasted				: "Sprecati",
 Tracker			: "Tracker",
 Track_URL			: "URL Tracker",
 Track_status		: "Stato del Tracker",
 Update_in			: "Aggiornamento In",
 DHT_status			: "Stato DHT",
 Save_as			: "Salva Come",
 Tot_size			: "Dimensione Totale",
 Created_on			: "Creato il",
 Comment			: "Commenti",
 
 
 //buttons
 add_button			: "Aggiungi File",
 add_url			: "Aggiungi URL",
 ok				: "   OK   ",
 Cancel				: " Annulla ",
 no				: "   No   ",
 
 mnu_add			: "Aggiungi Torrent",
 mnu_remove			: "Rimuovi",
 mnu_start			: "Avvia",
 mnu_pause			: "Pausa",
 mnu_stop			: "Stop",
 mnu_rss			: "Pianificatore RSS",
 mnu_settings			: "Opzioni",
 mnu_search			: "Cerca",
 mnu_lang			: "Lingua",
 
 //Other variables added by spide
 torrent_add			: "Aggiungi Torrent", /*Caption of torrent add box*/
 time_w				: "w ", /*for x weeks*/
 time_d				: "d ", /*for x days remaining*/
 time_h				: "h ", /*for x hours remaining*/
 time_m				: "m ", /*for x minutes remaining*/
 time_s				: "s ", /*for x seconds remaining*/

 //Novik's addition
 Base_directory    		: "Directory",
 Number_Peers_min		: "Minimum number of peers",
 Number_Peers_max		: "Maximum number of peers",
 Tracker_Numwant		: "Wished number of peers",
 Number_Peers_For_Seeds_min	: "Minimum number of seeds",
 Number_Peers_For_Seeds_max	: "Maximum number of seeds",
 Enable_port_open		: "Open listening port",
 dht_port			: "UDP port to use for DHT",
 Ather_Limiting			: "Other limitations",
 Number_dl_slots		: "Number of download slots",
 Glob_max_memory		: "Maximum memory usage",
 Glob_max_files			: "Maximum number of open files",
 Glob_max_http			: "Maximum number of open http connections",
 Glob_max_sockets		: "Maximum number of open sockets",
 Ather_sett			: "Other",
 Directory_For_Dl		: "Default directory for downloads",
 Check_hash			: "Check hash after download",
 Hash				: "Hash",
 IsOpen				: "Open",
 DisableTracker			: "Disable",
 EnableTracker			: "Enable",
 ClientVersion			: "Client",
 Flags				: "Flags",
 ReqTimeout			: "Request timeout",
 GetTrackerMessage		: "Receive messages from tracker",
 Help				: "Help",
 PHPDoesnt_enabled		: "Your Web-server does not support PHP. Correct this and try again.",
 Speed				: "Speed",
 Dont_add_tname			: "Don't add torrent's name to path", 
 Free_Disk_Space		: "Free disk space",
 badXMLRPCVersion		: "rTorrent is compiled with incorrect version of xmlrpc-c library, without i8 support. Version must be >= 1.11. Some functionality will be unavailable.",
 badLinkTorTorrent		: "Bad link to rTorrent. Check if it is really running. Check $scgi_port and $scgi_host settings in config.php and scgi_port in rTorrent configuration file.",
 badUploadsPath			: "Web-server can't access torrents directory for read/write/execute. You can't add torrents through ruTorrent.",
 badSettingsPath		: "Web-server can't access settings directory for read/write/execute. ruTorrent can't save own settings.",
 mnu_help			: "About",
 badUploadsPath2		: "rTorrent's user can't access torrents directory for read/execute. You can't add torrents through ruTorrent.",
 View				: "View",
 AsList				: "as list",
 AsTree				: "as tree",
 Group				: "Group",
 SuperSeed			: "Super-seed",
 badTestPath			: "rTorrent's user can't access file ./test.sh for read/execute. ruTorrent will not work.",
 badSettingsPath2		: "rTorrent's user can't access settings directory for read/write/execute. ruTorrent will not work.",
 scrapeDownloaded		: "Downloaded",
 badSessionPath			: "Web-server can't access rTorrent's session directory for read. ruTorrent will not work.",
 Total				: "Total",
 PCRENotFound			: "PHP module PCRE is not installed. ruTorrent will not work.",
 addTorrentSuccess		: "torrent was successfully passed to rTorrent.",
 addTorrentFailed		: "Error: torrent wasn't passed to rTorrent.",
 pnlState			: "State",
 newLabel			: "New Label",
 enterLabel			: "Enter Label",
 UIEffects			: "Show effects for UI elements",
 Plugins			: "Plugins",
 plgName			: "Name",
 plgStatus			: "Status",
 plgLoaded			: "Loaded",
 plgDisabled			: "Disabled",
 plgVersion			: "Version",
 plgAuthor			: "Author",
 plgDescr			: "Description",
 mnu_go				: "Go",
 pluginCantStart		: "plugin can't start for unknown reason.",
 doFastResume			: "Fast resume",
 innerSearch			: "Local torrents",
 removeTeg			: "Remove tag",
 errMustBeInSomeHost		: "ruTorrent and rTorrent must be installed on the same host. Plugin will not work.",
 warnMustBeInSomeHost		: "ruTorrent and rTorrent must be installed on the same host. Some functionality will be unavailable.",
 plgShutdown			: "Shutdown",
 limit				: "Limite",
 speedList			: "Speed popup list (comma-separated)",
 ClearButton			: "Clear",
 dontShowTimeouts		: "Ignore message about timeouts"
 };
