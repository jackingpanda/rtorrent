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
 * File Name: sp.js
 * 	Spanish language file.
 * 
 * File Author:
 * 		Carlos López (the_spide21@yahoo.com)
 */
 
 var theUILang =
 {
 //all used
 kbs				: "kB/s",
 
 
 //Settings window
 
 General			: "General",
 Downloads			: "Descargas",
 Connection			: "Conexión",
 BitTorrent			: "BitTorrent",
 Queueing			: "En Cola",
 Scheduler			: "Planificador",
 Advanced			: "Avanzada",
 Disk_Cache			: "Cache de Disco",
 Enable_Web_Interface : "Habilitar Interfaz Web",
 Authent			: "Autenticación",
 Username			: "Usuario",
 Password			: "Contraseńa",
 Enable_Guest_acc	: "Activar cuenta de Invitado con nombre de usuario",
 Connectivity		: "Conectividad",
 Alt_list_port		: "Puerto de escucha alternativo (Por def. es el de bittorent)",
 Rest_access		: "Restringir acceso a las siguientes Ips (Separar entradas múltiples con ,)",
 User_Interface		: "Interfaz de usuario",
 Confirm_del_torr	: "Confirmar al borrar Torrent(s)",
 Update_GUI_every	: "Actualizar GUI cada",
 ms					: "ms",
 Alt_list_bckgnd	: "Alternar color de fondo en la lista",
 Show_speed			: "Mostrar Vel.",
 Don_t				: "NO",
 In_status_bar		: "Barra de Tarea",
 In_title_bar		: "Barra de Título",
 Show_cat_start		: "Mostrar categorías al iniciar",
 Virt_row_thres		: "Umbral de fila virtual",
 Show_det_start		: "Mostrar detalles al iniciar",
 Restor_def			: "Restaurar configuraciones",
 When_add_torrent	: "Cuando se agregen Torrents",
 Dnt_start_down_auto: "No iniciar descarga automáticamente",
 Other_sett			: "Otras preferencias",
 Append_ut_incompl	: "Agregar .!ut a descargar incompletas",
 Prealloc_all_files	: "Reservar espacio en disco",
 Prev_stnd_w_act_con: "Prevenir hibernación si hay tareas activas",
 Listening_Port		: "Puerto escucha",
 Port_f_incom_conns	: "Puerto a usar para conexiones entrantes",
 Random_Port		: "Puerto aleatorio",
 Rnd_port_torr_start: "Seleccionar un puerto aleatoreo cada vez que inicie rTorrent",
 En_UPnP_mapp		: "Activar mapeo de puerto UPnP",
 Add_torr_mustdie_f	: "Agregar rTorrent a las excepciones de Windows Firewall (Windows XP SP2 o posterior)",
 Proxy_Server		: "Servidor Proxy",
 Type				: "Tipo",
 none				: "(Ninguno)",
 Proxy				: "Proxy",
 Port				: "Puerto",
 Use_proxy_4_p2p_con: "Usar servidor proxy para conexiones peer-to-peer",
 Bandwidth_Limiting : "Límite Global de Ancho de Banda",
 Global_max_upl		: "Vel. máxima de subida",
 unlimited			: "Sin límite",
 Alt_down_r_downl	: "Vel. de Subida cuando no hay descargas activas",
 Glob_max_downl		: "Vel. máxima de bajada ",
 Num_of_conn		: "Número de conexiones",
 Glob_max_conn		: "Máximo global de conexiones",
 Max_conn_peer_torr	: "Número máximo de pares conectados por torrent",
 Num_upl_slots		: "Número máximo de puestos de subida por torrent",
 Extra_ulslots		: "Puestos de subida extra si Vel. Subida es < 90%",
 Add_bittor_featrs	: "Caraterísticas Adicionales BitTorrent ",
 En_DHT_ntw			: "Activar Red DHT",
 Ask_scrape			: "Pedir al tracker info. de scrape",
 En_DHT_new_torrs	: "Activar DHT para torrents nuevos",
 Peer_exch			: "Activar intercambio de pares",
 Ip_report_track	: "IP/Nombre de Host a reportar al tracker",
 Protocol_enc		: "Protocolo de Encriptación",
 Outgoing			: "Salientes",
 Disabled			: "Deshabilitado",
 Enabled			: "Activo",
 Forced				: "Forzado",
 All_inc_legacy_conn: "Permitir conexiones entrantes legadas",
 Queue_sett			: "Opciones de cola",
 Max_n_act_torrs	: "Máximo número de torrents activo (Sirv o Desc.)",
 Max_num_act_downl	: "Máximo número de desc. activas",
 Seed_while			: "Servir mientras [Valores predet.]",
 Ratio_is			: "Ratio es",
 or_time_is			: " % o tiempo sirviendo es ",
 Ignore				: "(Ignorar)",
 nin_min			: "90 minutos",
 two_h				: "2 horas",
 three_h			: "3 horas",
 four_h				: "4 horas",
 five_h				: "5 horas",
 six_h				: "6 horas",
 seven_h			: "7 horas",
 eight_h			: "8 horas",
 nine_h				: "9 horas",
 ten_h				: "10 horas",
 twelve_h			: "12 horas",
 sixteen_h			: "16 horas",
 twenty_h			: "20 horas",
 tw_four_h			: "24 horas",
 thirty_h			: "30 horas",
 thirty_six_h		: "36 horas",
 forty_eight_h		: "48 horas",
 sixty_h			: "60 horas",
 sev_two_h			: "72 horas",
 nin_six_h			: "96 horas",
 Seed_prior			: "Tareas de compartición con mayor prioridad que descargas",
 When_torr_reach	: "Cuando la meta de compartición se ha alcanzado",
 Limit_upl_rate		: "Limitar la Vel. Subida a [0: Detener torrent]",
 En_shedul			: "Activar Planificador",
 Shed_sett			: "Opciones",
 Lim_upl_rate		: "Limitar Vel. Subida",
 Lim_dow_rate		: "Limitar Vel. Bajada",
 Dis_DHT_when_t_off	: "Desactivar DHT al apagar",
 Disc_cahe			: "Cache de Disco",
 Disc_cahe_bla_bla	: "La Cache del disco es usada para mantener datos que se accesan frecuentemente en la memoria para reducir el número de escrituras y lecturas en el disco duro. rTorrent maneja la Cache automáticamente, pero puede cambiar su comportamiento desde estas opciones.",
 Overwr_d_cahe_au	: "Especificar tamańo del cache manualmente",
 MB					: "MB",
 Red_mem_usage		: "Reducir el uso de memoria cuando no se necesita cache",
 Adv_cache_sett		: "Opciones avanzadas de Cache",
 En_cach_disc		: "Habilitar cache de escrituras de disco",
 Wr_out_ever_2_min	: "Escribir bloques intactos cada 2 minutos",
 Wr_immed			: "Escribir piezas terminadas inmediatamente",
 En_cah_disc_read	: "Habilitar Cache de lectura de disco",
 Turn_off_w_read	: "Apagar Cache de lectura si la velocidad de subida es baja",
 Rem_old_from_cahe	: "Quitar bloques viejos de la Cache",
 Increase_autom_cach: "Aumentar tamańo de Cache automáticamente cuando se necesite",
 Advanced			: "Avanzadas",
 Advanced_label		: "Opciones Avanzadas [PRECAUCIÓN: ˇNo modificar!]",
 Cancel				: "Cancelar",
 uTorrent_settings	: "Preferencias",
 
// Main window
 Doesnt_support		: "La interfaz ruTorrent no es compatible con tu navegador.",
 Name				: "Nombre",
 Status				: "Estado",
 Size				: "Tamaño",
 Done				: "Finalizado",
 Downloaded			: "Descargado",
 Uploaded			: "Subido",
 Ratio				: "Ratio",
 DL					: "De",
 UL					: "Su",
 ETA				: "ETA",
 Label				: "Etiqueta",
 Peers				: "Clientes",
 Seeds				: "Semillas",
 Avail				: "Disponibilidad",
 Remaining			: "Restante",
 Priority			: "Prioridad",
 Download			: "Descargar",
 Upload				: "Subir",
 Not_torrent_file	: "El archivo debe ser un torrent válido.",
 Pausing			: "Pausando",
 Seeding			: "Compartiendo",
 Downloading		: "Descargando",
 Checking			: "Comprobando",
 Error				: "Error",
 Queued				: "En cola",
 Finished			: "Completado",
 Stopped			: "Detenido",
 Request_timed_out	: "La petición a rTorrent se ha excedido de tiempo.",
 
 Force_Start		: "Forzar inicio",
 Start				: "Iniciar",
 Pause				: "Pausar",
 Stop				: "Detener",
 Force_recheck		: "Forzar comprobación",
 New_label			: "Nueva etiqueta...",
 Remove_label		: "Quitar etiqueta",
 Labels				: "Etiqueta",
 Remove				: "Eliminar",
 Delete_data		: "Eliminar Datos",
 Remove_and			: "Eliminar y ...",
 Details			: "Detalles...",
 Properties			: "Propiedades...",
 of					: "de", 		//this two creates line 
 connected			: "conectado(s)",	//  XX of YY connected
 High_priority		: "Alta",
 Normal_priority	: "Normal",
 Low_priority		: "Baja",
 Dont_download		: "No descargar",
 Shure_restore_UI	: "żEstá seguro de restaurar la interfaz de usuario?",
 Reloading			: "Cargando...",
 Name				: "Nombre",
 Date_				: "Fecha",
 Files				: "Archivos",
 Logger				: "Registro",
 
 s					: "s",    // part of "KB/s"
 bytes				: "bytes",
 KB					: "KB",
 MB					: "MB",
 GB					: "GB",
 TB					: "TB",
 PB					: "PB",
 
 // main WND s
 Loading			: "Cargando...",
 Torrent_file		: "Archivo Torrent",
 Torrent_URL		: "URL del Torrent",
 Cookies			: "Cookies",
 RSS_Downloader		: "Descargador RSS",
 Torrent_properties	: "Propiedades del Torrent",
 Trackers			: "Trackers",
 Max_down_rate		: "Vel. Máxima de descarga",
 Max_upl_rate		: "Vel. Máxima de subida",
 Bandwidth_sett		: "Preferencias de Ancho de Banda",
 Number_ul_slots	: "Números de puestos de subida",
 Override_default	: "Ignorar Config. por defecto",
 Initial_seed		: "Iniciar sirviendo",
 Enable_DHT			: "Activar DHT",
 Peer_ex			: "Intercambio de pares",
 About				: "Acerca de",
 Enter_label_prom	: "Introduzca la nueva etiqueta para los torrents seleccionados",
 Remove_torrents	: "Eliminar Torrent(s)",
 Rem_torrents_prompt: "żDesea borrar los torrents seleccionados?",
 All				: "Todos",
 Active				: "Activos",
 Inactive			: "Inactivos",
 No_label			: "Sin Etiqueta",
 Transfer			: "Transferencia",
 Time_el			: "Transcurrido",
 Remaining			: "Restantes",
 Share_ratio		: "Ratio",
 Down_speed			: "Vel. de bajada",
 Down_limit			: "Límite Des.",
 Ul_speed			: "Vel. de subida",
 Ul_limit			: "Límite Sub.",
 Wasted				: "Desperdiciado",
 Tracker			: "Tracker",
 Track_URL			: "URL del Tracker",
 Track_status		: "Estado",
 Update_in			: "Actualizar en",
 DHT_status			: "Estado DHT",
 Save_as			: "Archivo",
 Tot_size			: "Tamaño total",
 Created_on			: "Creado el",
 Comment			: "Comentario",
 
 
 //buttons
 add_button			: "Agregar archivo",
 add_url			: "Agregar URL",
 ok				: "   OK   ",
 Cancel				: " Cancelar ",
 no				: "   No   ",
 
 mnu_add			: "Agregar Torrent",
 mnu_remove			: "Eliminar",
 mnu_start			: "Iniciar",
 mnu_pause			: "Pausa",
 mnu_stop			: "Detener",
 mnu_rss			: "Descargador RSS",
 mnu_settings			: "Preferencias",
 mnu_search			: "Búsqueda",
 mnu_lang			: "Idioma",
 
 //Other variables added by spide
 torrent_add			: "Agregar Torrent",
 time_w				: "S ", /*for x weeks*/
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
 limit				: "Límite",
 speedList			: "Speed popup list (comma-separated)",
 ClearButton			: "Clear",
 dontShowTimeouts		: "Ignore message about timeouts"
 };
