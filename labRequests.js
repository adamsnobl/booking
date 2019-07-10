var labEvents = [
  { title: 'Mgmt Meeting / Kamila L.', start: '2019-09-10T14:00:00', end: '2019-09-10T15:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'CorpSys Leadership / Valentina L.', start: '2019-09-03T08:00:00', end: '2019-09-03T18:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'CorpSys Leadership / Valentina L.', start: '2019-09-04T08:00:00', end: '2019-09-04T15:00:00', resourceId: 'B-LONGTABLE' },
  { title: '<Break IT!> / Michaela', start: '2019-07-23T08:00:00',  end  : '2019-07-23T18:00:00', resourceId: 'C-MEETROOM'},
  { title: 'M7T Scrum COP  / Ondrej V.', start: '2019-07-02T14:30:00', end: '2019-07-02T15:30:00', resourceId: 'C-MEETROOM' },
  { title: 'Idea Exchange / Adela P.', start: '2019-08-29T11:00:00', end: '2019-08-29T12:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'Idea Exchange / Adela P.', start: '2019-07-25T11:00:00', end: '2019-07-25T12:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'DBG AWS Training Day 1 / Stan S.', start: '2019-06-24T09:00:00', end: '2019-06-24T17:00:00', resourceId: 'C-MEETROOM' },
  { title: 'DBG AWS Training Day 2 / Stan S.', start: '2019-06-25T09:00:00', end: '2019-06-25T17:00:00', resourceId: 'C-MEETROOM' },
  { title: 'BE CoP / Zuzka T.', start: '2019-06-20T14:30:00', end: '2019-06-20T15:30:00', resourceId: 'A-ROUNDTABLE' },
  { title: 'TKP Meeting / Jana B.', start: '2019-06-20T13:00:00', end: '2019-06-20T14:00:00', resourceId: 'C-MEETROOM' },
  { title: 'CTS - interview/ Jana B.', start: '2019-06-19T13:00:00', end: '2019-06-19T14:00:00', resourceId: 'C-MEETROOM' },
  { title: 'STOXX Index Ops Leadership Training / Jason C.', start: '2019-08-07T09:00:00', end: '2019-08-08T18:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'RPA Training / Lorena N.', start: '2019-07-08T09:00:00', end: '2019-07-09T17:00:00', resourceId: 'C-MEETROOM' },
  { title: 'XBID Scrum Ceremonies - Review, Retrospective, Planning', start: '2019-06-13T09:30:00', end: '2019-06-13T11:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Energy Operational Model', start: '2019-06-11T13:00:00', end: '2019-06-11T15:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Cloud Update / Melinda R.',  start: '2019-06-25T10:00:00',  end  : '2019-06-25T11:00:00',  resourceId: 'B-LONGTABLE'},
  { title: 'Stoxx Break-Fast / Elena S.', start: '2019-06-11T07:00:00', end: '2019-06-11T11:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'Security Meeting / Zdenek V.', start: '2019-06-05T11:00:00', end: '2019-06-05T15:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'M7T Backlog Cleaning II / Ondrej V.', start: '2019-06-14T10:30:00', end: '2019-06-14T16:30:00', resourceId: 'C-MEETROOM' },
  { title: 'Energy BizOps Team Review', start: '2019-06-10T13:00:00', end: '2019-06-10T14:30:00', resourceId: 'C-MEETROOM' },
  { title: 'TKP Meeting / Jana B.', start: '2019-06-04T10:00:00', end: '2019-06-04T12:00:00', resourceId: 'C-MEETROOM' },
  { title: 'TKP Meeting / Jana B.', start: '2019-06-05T10:00:00', end: '2019-06-05T12:00:00', resourceId: 'C-MEETROOM' },
  { title: 'TKP Meeting / Jana B.', start: '2019-06-06T10:00:00', end: '2019-06-06T12:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Customer Service Training / Jana B.', start: '2019-06-17T13:00:00', end: '2019-06-17T17:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'Customer Service Training / Jana B.', start: '2019-06-18T08:00:00', end: '2019-06-18T18:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Customer Service Training / Jana B.', start: '2019-06-19T10:00:00', end: '2019-06-19T12:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Customer Service Training / Jana B.', start: '2019-06-19T14:00:00', end: '2019-06-19T16:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Customer Service Training / Jana B.', start: '2019-06-20T10:00:00', end: '2019-06-20T12:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Customer Service Training / Jana B.', start: '2019-06-20T14:00:00', end: '2019-06-20T17:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Customer Service Training / Jana B.', start: '2019-06-21T08:00:00', end: '2019-06-21T12:00:00', resourceId: 'C-MEETROOM' },
  { title: 'M7T Scrum COP  / Ondrej V.', start: '2019-06-04T14:30:00', end: '2019-06-04T15:30:00', resourceId: 'C-MEETROOM' },
  { title: 'M7T Backlog Cleaning / Ondrej V.', start: '2019-05-31T10:00:00', end: '2019-05-31T17:00:00', resourceId: 'C-MEETROOM' },
  { title: 'M7A UI Change Ref / Nurhayat S.', start: '2019-05-20T09:00:00', end: '2019-05-20T13:30:00', resourceId: 'C-MEETROOM' },
  { title: 'Energy BizOps Review / Alex T.', start: '2019-05-20T14:00:00', end: '2019-05-20T16:00:00', resourceId: 'C-MEETROOM' },
  { title: 'XBID Losses Workshop', start: '2019-05-15T10:00:00', end: '2019-05-15T15:30:00', resourceId: 'B-LONGTABLE' },
  { title: 'Scrum COP / Ondrej V.', start: '2019-05-07T14:30:00',  end: '2019-05-07T15:30:00', resourceId: 'C-MEETROOM'   },
  { title: 'M7A Ref / Nurhayat Sakar', start: '2019-04-16T09:00:00',  end: '2019-04-16T11:00:00', resourceId: 'C-MEETROOM'   },
  { title: 'M7A Ref / Nurhayat Sakar', start: '2019-04-15T14:00:00',  end: '2019-04-15T16:00:00', resourceId: 'C-MEETROOM'   },
  { title: 'Energy Q1 OpsRev', start: '2019-04-17T14:00:00',  end: '2019-04-17T16:00:00', resourceId: 'C-MEETROOM'   },
  { title: 'EPEX Workshop / Blanka M.', start: '2019-04-01T13:00:00',  end: '2019-04-01T16:00:00', resourceId: 'C-MEETROOM'   },
  { title: 'BuBa Meeting', start: '2019-04-09T14:00:00',  end: '2019-04-09T15:30:00', resourceId: 'C-MEETROOM'   },
  { title: 'BuBa Meeting', start: '2019-04-10T09:00:00',  end: '2019-04-10T11:00:00', resourceId: 'C-MEETROOM'   },
  { title: 'EPEX visit / Blanka M.', start: '2019-04-23T12:30:00',  end: '2019-04-23T21:00:00', resourceId: 'C-MEETROOM'   },
  { title: 'Test COP / Blanka M.', start: '2019-03-28T14:00:00',  end: '2019-03-28T15:00:00', resourceId: 'C-MEETROOM'   },
  { title: 'Scrum COP / Blanka M.', start: '2019-03-26T14:30:00',  end: '2019-03-26T15:30:00', resourceId: 'C-MEETROOM'   },
  { title: 'RRH CoP / Frantisek H.', start: '2019-03-25T13:00:00', end: '2019-03-25T14:30:00', resourceId: 'C-MEETROOM' },
  { title: 'RRH Job Interview / Frantisek H.',  start: '2019-03-15T15:00:00', end: '2019-03-15T16:15:00',   resourceId: 'C-MEETROOM' },
  { title: 'Business Operations 2019 Targets Workshop / Alex T.', start: '2019-03-12T13:00:00', end: '2019-03-12T15:00:00', resourceId: 'C-MEETROOM' },
  { title: 'M7A UI / Ondrej B.', start: '2019-03-05T09:30:00',  end: '2019-03-05T16:00:00', resourceId: 'C-MEETROOM' },  
  { title: 'OpsGenie Demo For Energy / Alex T.', start: '2019-03-13T09:00:00',  end: '2019-03-13T11:00:00', resourceId: 'C-MEETROOM'    },  
  { title: 'RPA Governance / Michal K.', start: '2019-02-13T10:00:00',  end: '2019-02-13T18:00:00', resourceId: 'C-MEETROOM'    },  
  { title: 'M7T Targets / Ondra V.', start: '2019-02-12T11:00:00',  end: '2019-02-12T12:00:00', resourceId: 'B-LONGTABLE'    },
  { title: 'COP Meeting / Ondra V.', start: '2019-02-12T14:30:00',  end: '2019-02-12T15:30:00', resourceId: 'C-MEETROOM'   },
  { title: 'M7A Ref/ Nurhayat S.', start: '2019-02-18T09:00:00', end: '2019-02-18T11:00:00', resourceId: 'C-MEETROOM'},
  { title: 'M7A Ref/ Nurhayat S.', start: '2019-02-18T12:00:00', end: '2019-02-18T14:30:00', resourceId: 'C-MEETROOM'},
  { title: 'EDT Planning / Martin S.', start: '2019-02-18T14:30:00', end: '2019-02-18T18:00:00', resourceId: 'C-MEETROOM'},
  { title: 'On Principles', start: '2019-02-14T16:00:00', end: '2019-02-14T17:00:00', resourceId: 'A-ROUNDTABLE'},
  { title: 'COP Meeting / Ondra V.', start: '2019-01-29T14:30:00',  end: '2019-01-29T15:30:00', resourceId: 'C-MEETROOM'   },
  { title: 'M7A Cloud / Nurhayat S.', start: '2019-02-19T09:00:00', end: '2019-02-19T11:00:00', resourceId: 'C-MEETROOM'},
  { title: 'M7A Refinement / Nurhayat S.', start: '2019-01-15T12:00:00', end: '2019-01-15T13:00:00', resourceId: 'A-ROUNDTABLE'},
  { title: 'M7A Cloudification / Nurhayat S.', start: '2019-03-04T09:00:00', end: '2019-03-04T17:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Recruitment Session / Renata P.', start: '2019-03-25T14:00:00', end: '2019-03-25T16:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'GoT #1/ Tomas K.', start: '2019-03-21T17:30:00', end: '2019-03-21T19:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'GoT #2/ Tomas K.', start: '2019-03-28T17:30:00', end: '2019-03-28T19:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'GoT #3/ Tomas K.', start: '2019-04-04T17:30:00', end: '2019-04-04T19:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'GoT #4/ Tomas K.', start: '2019-04-11T17:30:00', end: '2019-04-11T19:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'EDT Meeting / Michal K.', start: '2019-03-12', end: '2019-03-16', resourceId: 'B-LONGTABLE' },
  { title: 'Meeting / Ali E.', start: '2019-03-21T09:00:00', end: '2019-03-21T13:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Meeting / Guilhem C.', start: '2019-04-02T16:00:00', end: '2019-04-02T17:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Marketing Workshop / Kamila L.', start: '2019-03-21T10:00:00', end: '2019-03-21T12:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'Sentinel One Workshop / Josef S.', start: '2019-03-21T13:00:00', end: '2019-03-21T16:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'Welcome Days / HR', start: '2019-04-01T09:00:00', end: '2019-04-01T12:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'Welcome Days / HR', start: '2019-05-02T09:00:00', end: '2019-05-02T12:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'C7 Meet / Katerina V', start: '2019-05-22T11:00:00', end: '2019-05-22T12:15:00', resourceId: 'B-LONGTABLE' },
  { title: 'K8s Training / David R.', start: '2019-04-08', end: '2019-04-11', resourceId: 'B-LONGTABLE' },
  { title: 'Docker Training / David R.', start: '2019-04-15', end: '2019-04-18', resourceId: 'B-LONGTABLE' },
  { title: 'Facility - Carpet fix / Ondrej H.', start: '2019-04-18T08:00:00', end: '2019-04-18T12:00:00', resourceId: 'A-ROUNDTABLE' },
  { title: 'COP Meeting / Ondra V.', start: '2019-01-15T14:30:00',  end: '2019-01-15T15:30:00', resourceId: 'C-MEETROOM'   },
  { title: 'HUPX Workshop / Blanka M.',      start: '2019-01-23T08:45:00',  end: '2019-01-24T18:00:00', resourceId: 'C-MEETROOM'   },
  { title: 'Reinventing Organisations / Josef P.', start: '2019-01-18T15:00:00', end: '2019-01-18T16:00:00', resourceId: 'B-LONGTABLE'    },
  { title: 'Stx Meeting / Ondrej S.', start: '2019-01-02T14:00:00', end: '2019-01-02T14:30:00', resourceId: 'B-LONGTABLE' },
  { title: 'RRH Job interview / Frantisek H.',  start: '2019-01-03T09:00:00', end: '2019-01-03T10:30:00', resourceId: 'C-MEETROOM' },
  { title: 'RRH Job interview / Frantisek H.',  start: '2019-01-09T10:00:00', end: '2019-01-09T11:30:00', resourceId: 'C-MEETROOM' },
  { title: 'StatistiX Weekly/ Ondrej S.',  start: '2019-01-09T14:00:00', end: '2019-01-09T15:00:00',     resourceId: 'C-MEETROOM' },
  { title: 'XBID Sprint Review / Marek F.',  start: '2019-01-09T15:00:00', end: '2019-01-09T16:00:00',     resourceId: 'C-MEETROOM' },
  { title: 'SDT Services / Martin S.', start: '2019-01-10T10:00:00', end: '2019-01-10T11:00:00', resourceId: 'C-MEETROOM' },
  { title: 'SETI Brainstorming / Stan S.', start: '2019-01-10T11:00:00', end: '2019-01-10T12:00:00', resourceId: 'C-MEETROOM' },
  { title: 'RRH Job interview planning / Frantisek H.',  start: '2019-01-10T13:30:00', end: '2019-01-10T14:00:00', resourceId: 'C-MEETROOM' },
  { title: 'RRH Conf call with service provider / Frantisek H.',  start: '2019-01-10T14:00:00', end: '2019-01-10T15:15:00', resourceId: 'C-MEETROOM' },
  { title: 'Toastmasters Public Speaking / Dirk K.', start: '2019-01-10T16:00:00', end: '2019-01-10T17:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'SETI Meet / Stan S.', start: '2019-01-15T09:00:00', end: '2019-01-15T10:00:00', resourceId: 'C-MEETROOM' },
  { title: 'STOXX Meet / John A.', start: '2019-01-15T12:00:00', end: '2019-01-15T13:30:00', resourceId: 'C-MEETROOM' },
  { title: 'StatistiX Coordination/ Ondrej S.',  start: '2019-01-16T14:00:00', end: '2019-01-16T15:00:00',     resourceId: 'C-MEETROOM' },
  { title: 'R7 GUI Architecture / Dirk K.', start: '2019-01-14T10:00:00', end: '2019-01-14T12:00:00', resourceId: 'C-MEETROOM' },
  { title: 'COP Meet / Martina D.', start: '2019-01-15T09:00:00', end: '2019-01-15T10:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'StatistiX Coordination/ Ondrej S.',  start: '2019-01-30T14:00:00', end: '2019-01-30T15:00:00',     resourceId: 'C-MEETROOM' },
  { title: 'Travellers Club / Marketa T', start: '2019-02-06T16:00:00', end: '2019-02-06T17:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'Toastmasters Public Speaking / Dirk K.', start: '2019-01-24T16:00:00', end: '2019-01-24T17:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'Linux Security Meeting / Pascal V.', start: '2019-01-30T11:15:00', end: '2019-01-30T12:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Workshop & Planning - TSA / Sebastian N.', start: '2019-02-04T09:30:00', end: '2019-02-05T18:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'Workshop & Planning - TSA / Sebastian N.', start: '2019-02-04T12:30:00', end: '2019-02-05T19:00:00', resourceId: 'C-MEETROOM' },
  { title: 'StatistiX Week/ Ondrej S.',  start: '2019-02-06T14:00:00', end: '2019-02-06T15:00:00',     resourceId: 'C-MEETROOM' },
  { title: 'HR Training / Vendula S.', start: '2019-02-07T13:00:00', end: '2019-02-07T15:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Toastmasters Public Speaking / Dirk K.', start: '2019-02-07T16:00:00', end: '2019-02-07T17:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'Maintenance Work / Stan S.', start: '2019-02-12T09:00:00', end: '2019-02-12T13:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Toastmasters Public Speaking / Dirk K.', start: '2019-02-19T16:00:00', end: '2019-02-19T17:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'DBP Workshop / Stanimira B.', start: '2019-02-20', end: '2019-02-23', resourceId: 'B-LONGTABLE' },
  { title: 'VC Meeting / Stephan R.', start: '2019-02-22T11:00:00', end: '2019-02-22T11:30:00', resourceId: 'C-MEETROOM' },
  { title: 'Toastmaster Club Officer Meeting / Dirk K.', start: '2019-02-25T15:00:00', end: '2019-02-25T16:00:00', resourceId: 'C-MEETROOM' },
  { title: 'ECP JF / Michal P.', start: '2019-02-26T09:30:00', end: '2019-02-26T10:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Service Work / Stanislav S.', start: '2019-02-27T13:30:00', end: '2019-02-27T15:30:00', resourceId: 'C-MEETROOM' },
  { title: 'DT Services / Martin S.', start: '2019-02-28T10:00:00', end: '2019-02-28T11:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Welcome Days / HR', start: '2019-03-01T09:00:00', end: '2019-03-01T12:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'T. Mann Gymnasium-DBG Introduction / Tom W.', start: '2019-03-01T12:30:00', end: '2019-03-01T13:30:00', resourceId: 'B-LONGTABLE' },
  { title: 'Scrum Beer  / Pavel P.', start: '2019-03-05T18:00:00', end: '2019-03-05T21:0:00', resourceId: 'B-LONGTABLE' },
  { title: 'Team Townhall meeting / Fabian H.', start: '2019-03-06T17:00:00', end: '2019-03-06T18:0:00', resourceId: 'B-LONGTABLE' },
  { title: 'Clarity Project Manager training / Michal P.', start: '2019-03-06T11:00:00', end: '2019-03-06T18:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Happiness At Work  / Tom W.', start: '2019-03-07T10:00:00', end: '2019-03-07T12:0:00', resourceId: 'B-LONGTABLE' },
  { title: 'Toastmasters Public Speaking / Dirk K.', start: '2019-03-07T16:00:00', end: '2019-03-07T17:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'Risk IT RDS Design Meeting / Dirk K.', start: '2019-03-08T14:30:00', end: '2019-03-08T16:30:00', resourceId: 'C-MEETROOM' },
  { title: 'Board Games Event / Tomas K.', start: '2019-03-20T17:00:00', end: '2019-03-20T22:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'Toastmasters Public Speaking / Dirk K.', start: '2019-03-21T16:00:00', end: '2019-03-21T17:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'Finance Roadmap / Tanja U.', start: '2019-03-26T10:00:00', end: '2019-03-26T16:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'Finance Roadmap / Tanja U.', start: '2019-03-26T10:00:00', end: '2019-03-26T16:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Finance Roadmap / Tanja U.', start: '2019-03-27T10:00:00', end: '2019-03-27T16:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'Finance Roadmap / Tanja U.', start: '2019-03-27T10:00:00', end: '2019-03-27T16:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Finance Roadmap / Tanja U.', start: '2019-03-28T10:00:00', end: '2019-03-28T16:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'Finance Roadmap / Tanja U.', start: '2019-03-28T10:00:00', end: '2019-03-28T16:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Toastmasters Public Speaking / Dirk K.', start: '2019-04-04T16:00:00', end: '2019-04-04T17:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'HR Welcome Days / Vera S. ', start: '2019-04-12T08:00:00',  end: '2019-04-12T14:00:00', resourceId: 'B-LONGTABLE'    },
  { title: 'Toastmasters Public Speaking / Dirk K.', start: '2019-04-18T16:00:00', end: '2019-04-18T17:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'Scrum Training / Martin K.', start: '2019-04-24', end: '2019-04-26', resourceId: 'B-LONGTABLE' },
  { title: 'Service Work', start: '2019-04-26T08:00:00', end: '2019-04-26T10:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Asset Servicing After-work/ Ales P.',  start: '2019-04-24T17:00:00', end: '2019-04-24T19:00:00',   resourceId: 'C-MEETROOM' },  
  { title: 'Toastmasters Public Speaking / Dirk K.', start: '2019-05-02T16:00:00', end: '2019-05-02T17:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'COP Mgmt / Kamila L.', start: '2019-05-07T13:00:00', end: '2019-05-07T14:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'AWS: AI Workshop / Stan.', start: '2019-05-13T09:00:00', end: '2019-05-13T12:30:00', resourceId: 'B-LONGTABLE' },
  { title: 'AWS: Energy / Pavel P.', start: '2019-05-13T13:00:00', end: '2019-05-13T14:00:00', resourceId: 'C-MEETROOM' },
  { title: 'AWS: CD Workshop / Stan.', start: '2019-05-14T13:00:00', end: '2019-05-14T16:30:00', resourceId: 'B-LONGTABLE' },
  { title: 'Mindfulness / Tom W.', start: '2019-05-14T13:30:00', end: '2019-05-14T15:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'Happines At Work / Tom W.', start: '2019-05-16T10:00:00', end: '2019-05-16T11:30:00', resourceId: 'B-LONGTABLE' },
  { title: 'Welcome Days / Vera S.', start: '2019-05-21T08:00:00', end: '2019-05-21T14:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'Employer Branding / Tom W.', start: '2019-05-23T09:30:00', end: '2019-05-23T11:30:00', resourceId: 'B-LONGTABLE' },
  { title: 'HR Meetup / Mia M.', start: '2019-05-23T12:00:00', end: '2019-05-23T13:30:00', resourceId: 'B-LONGTABLE' },
  { title: 'WELCOME DAY / Petr P.', start: '2019-06-03T12:30:00', end: '2019-06-03T17:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'T2S Prague / Misa/Kamila', start: '2019-06-26T10:00:00', end: '2019-06-27T17:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'T2S Prague / Misa/Kamila', start: '2019-06-26T10:00:00', end: '2019-06-27T17:00:00', resourceId: 'A-ROUNDTABLE' },
  { title: 'T2S Prague / Misa/Kamila', start: '2019-06-26T10:00:00', end: '2019-06-27T17:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Farewell Presentation / Petr P.', start: '2019-01-29T15:30:00', end: '2019-01-29T17:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'IFS IT Section Meeting / Christian P.', start: '2019-01-21T14:00:00', end: '2019-01-21T15:30:00', resourceId: 'B-LONGTABLE' },
  { title: 'COP MNG Meeting / Misa C.', start: '2019-06-18T13:00:00', end: '2019-06-18T14:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'Risk Meeting / Kamila L.', start: '2019-06-06T11:00:00', end: '2019-06-06T12:30:00', resourceId: 'B-LONGTABLE' },
  { title: 'Core Business Training / Kamila L.', start: '2019-06-19', end: '2019-06-22', resourceId: 'B-LONGTABLE' },
  { title: 'New lunch-time forum concept  / Adela P.', start: '2019-06-24T14:00:00', end: '2019-06-24T15:30:00', resourceId: 'B-LONGTABLE' },
  { title: 'Phils Sales Presentation / Phil B.', start: '2019-06-24T16:30:00', end: '2019-06-24T18:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'COP OPS Meeting / Misa C.', start: '2019-06-25T14:00:00', end: '2019-06-25T15:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'RRH Dev Team PRG - team event / Frantisek H.', start: '2019-06-25T15:00:00', end: '2019-06-25T17:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'Training Preparation / Compliance / Jana A.',  start: '2019-01-17T11:00:00', end: '2019-01-17T14:00:00',   resourceId: 'C-MEETROOM' },
  { title: 'RRH Conf call with service provider / Frantisek H.',  start: '2019-01-17T14:00:00', end: '2019-01-17T14:45:00',   resourceId: 'C-MEETROOM' },
  { title: 'Labor Union Meeting / Adam R.',  start: '2019-01-17T16:00:00', end: '2019-01-17T17:30:00',   resourceId: 'B-LONGTABLE' },
  { title: 'DT services / Martin S.',  start: '2019-02-01T13:00:00', end: '2019-02-01T15:00:00',   resourceId: 'C-MEETROOM' },
  { title: 'Prisma RDS-GUI: re:Invent 2018 / Zdenda P.', start: '2019-01-24T13:00:00', end: '2019-01-24T15:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'HoU Meeting / Barbora S.', start: '2019-06-18T11:00:00', end: '2019-06-18T12:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'Labor Union Meeting / Adam R.',  start: '2019-01-31T16:00:00', end: '2019-01-31T17:30:00',   resourceId: 'B-LONGTABLE' },
  { title: 'Deep Dive Scrum & next steps / Martin S.',  start: '2019-03-20', resourceId: 'C-MEETROOM' },
  { title: 'Labor Union Meeting / Ladislav T.',  start: '2019-04-11T16:00:00', end: '2019-04-11T17:00:00',   resourceId: 'C-MEETROOM' },
  { title: 'Toastmasters Public Speaking / David M.', start: '2019-05-16T16:00:00', end: '2019-05-16T17:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'WFM - iStudio workflow / Jan D.', start: '2019-04-25T10:00:00',  end: '2019-04-25T12:00:00', resourceId: 'C-MEETROOM'   },
  { title: 'Labor Union Meeting / Adam R.',  start: '2019-04-25T15:00:00', end: '2019-04-25T16:30:00',   resourceId: 'C-MEETROOM' },
  { title: 'RPA Meeting / Tomas B.',  start: '2019-04-25T12:30:00', end: '2019-04-25T13:30:00',   resourceId: 'C-MEETROOM' },
  { title: 'DT Services / Martin S.', start: '2019-05-02T10:00:00', end: '2019-05-02T11:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Service Work / Stan.', start: '2019-05-21T10:00:00', end: '2019-05-21T12:00:00', resourceId: 'C-MEETROOM' },
  { title: 'M7A Customer meeting / Pavol Lacko', start: '2019-05-22T08:00:00',  end: '2019-05-23T17:30:00', resourceId: 'C-MEETROOM'   },
  { title: 'BigEngine training / Frantisek H.', start: '2019-05-28T10:00:00', end: '2019-05-28T18:00:00', resourceId: 'C-MEETROOM' },
  { title: 'BigEngine training / Frantisek H.', start: '2019-05-29T10:00:00', end: '2019-05-29T14:30:00', resourceId: 'C-MEETROOM' },
  { title: 'Workshop ClearingIT / Jiri S.', start: '2019-05-29T09:00:00', end: '2019-05-29T17:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'Toastmasters Public Speaking / David M.', start: '2019-05-30T16:00:00', end: '2019-05-30T17:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'Toastmasters Public Speaking / David M.', start: '2019-06-13T16:00:00', end: '2019-06-13T17:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'Toastmasters Public Speaking / David M.', start: '2019-06-27T16:00:00', end: '2019-06-27T17:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'Welcome Day / Tom W.', start: '2019-07-01T12:30:00', end: '2019-07-01T16:30:00', resourceId: 'B-LONGTABLE' },
  { title: 'Toastmasters Public Speaking / David M.', start: '2019-07-11T16:00:00', end: '2019-07-11T17:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'Toastmasters Public Speaking / David M.', start: '2019-07-25T16:00:00', end: '2019-07-25T17:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'Welcome Day / Tom W.', start: '2019-08-05T12:30:00', end: '2019-08-05T16:30:00', resourceId: 'B-LONGTABLE' },
  { title: 'Toastmasters Public Speaking / David M.', start: '2019-08-08T16:00:00', end: '2019-08-08T17:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'Toastmasters Public Speaking / David M.', start: '2019-08-22T16:00:00', end: '2019-08-22T17:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'Welcome Day / Tom W.', start: '2019-09-02T12:30:00', end: '2019-09-02T16:30:00', resourceId: 'B-LONGTABLE' },
  { title: 'Pulse Check / Ali', start: '2019-05-06T11:15:00', end: '2019-05-06T12:30:00', resourceId: 'C-MEETROOM' },
  { title: 'IFS IT Prague Team Meeting / Christian P.', start: '2019-05-22T15:00:00', end: '2019-05-22T16:30:00', resourceId: 'B-LONGTABLE' },
  { title: 'CashMIR Workshop', start: '2019-05-21T14:00:00', end: '2019-05-21T16:00:00', resourceId: 'C-MEETROOM'},
  { title: 'Farewell Event for Tomas Ch. / Stan S.', start: '2019-05-24T14:00:00', end: '2019-05-24T15:30:00', resourceId: 'B-LONGTABLE'},
  { title: 'Risk IT RDS/GUI / Dirk K.', start: '2019-06-05T15:00:00', end: '2019-06-05T16:30:00', resourceId: 'B-LONGTABLE' },
  { title: 'IFS IT Section Meeting / Christian P.', start: '2019-07-09T10:30:00', end: '2019-07-09T11:30:00', resourceId: 'B-LONGTABLE'},
  { resourceId: 'C-MEETING', title: 'DB WH4B Workshops / Vojtech F.', start: '2018-07-17T08:00:00', end: '2018-07-17T17:00:00'},
  { resourceId: 'C-MEETING', title: 'DB WH4B Workshops / Vojtech F.', start: '2018-07-18T08:00:00', end: '2018-07-18T17:00:00'}
]
