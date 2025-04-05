var themes = {
  "travel": [
    {
      "sentence": "Voyageur: Bonjour, un aller simple pour Lyon, s’il vous plaît.\nGuichetier: Voilà, ça fera 25 euros.",
      "explanation": "'Aller simple' = one-way ticket. 'Ça fera' = that will be (cost).",
      "translation": "Traveler: Hello, one one-way ticket to Lyon, please.\nTicket agent: Here you go, that will be 25 euros."
    },
    {
      "sentence": "Voyageur: Où est le quai numéro 5 ?\nAgent: C’est juste là, après l’escalier à droite.",
      "explanation": "'Quai' = platform. 'Après l’escalier' = after the stairs.",
      "translation": "Traveler: Where is platform number 5?\nAgent: It’s right there, after the stairs on the right."
    },
    {
      "sentence": "Touriste: Comment aller à la Gare du Nord depuis ici ?\nPassant: Prenez la ligne 4 du métro, direction Porte de Clignancourt.",
      "explanation": "Asking directions in Paris. 'Prenez la ligne' = take line.",
      "translation": "Tourist: How do I get to Gare du Nord from here?\nLocal: Take metro line 4, direction Porte de Clignancourt."
    },
    {
      "sentence": "Passager: Est-ce que ce train va à Marseille ?\nContrôleur: Oui, mais il ne s’arrête qu’à la gare Saint-Charles.",
      "explanation": "'Ne s’arrête qu’à' = only stops at. Talking to train staff.",
      "translation": "Passenger: Does this train go to Marseille?\nConductor: Yes, but it only stops at Saint-Charles station."
    },
    {
      "sentence": "Voyageur: Où puis-je acheter un ticket de métro ?\nAgent: Il y a une borne juste à l’entrée.",
      "explanation": "'Borne' = machine. 'Juste à l’entrée' = right at the entrance.",
      "translation": "Traveler: Where can I buy a metro ticket?\nAgent: There’s a machine right at the entrance."
    },
    {
      "sentence": "Touriste: Combien coûte un carnet de tickets ?\nAgent: C’est 17,35 euros pour 10 tickets.",
      "explanation": "'Carnet' = pack. Common for Paris metro.",
      "translation": "Tourist: How much is a booklet of tickets?\nAgent: It’s 17.35 euros for 10 tickets."
    },
    {
      "sentence": "Client: J’ai réservé un Uber, il arrive dans 2 minutes.\nAmi: Super, on est prêts ?",
      "explanation": "Simple travel coordination. 'Réservé' = booked.",
      "translation": "Client: I booked an Uber, it arrives in 2 minutes.\nFriend: Great, are we ready?"
    },
    {
      "sentence": "Voyageur: Y a-t-il un taxi disponible ici ?\nHôtelier: Oui, il y a une station juste devant l’hôtel.",
      "explanation": "'Station de taxi' = taxi stand. 'Juste devant' = right in front.",
      "translation": "Traveler: Is there a taxi available here?\nHotel staff: Yes, there's a stand right in front of the hotel."
    },
    {
      "sentence": "Passager: Quel est le numéro de ma porte d’embarquement ?\nAgent: C’est la porte 22B.",
      "explanation": "'Porte d’embarquement' = boarding gate.",
      "translation": "Passenger: What is my boarding gate number?\nAgent: It's gate 22B."
    },
    {
      "sentence": "Voyageur: À quelle heure part le train pour Bordeaux ?\nGuichetier: Il part à 14h45, voie 3.",
      "explanation": "'Voie' = track. Common station phrase.",
      "translation": "Traveler: What time does the train to Bordeaux leave?\nTicket agent: It leaves at 2:45 PM, track 3."
    },
    {
      "sentence": "Client: Peut-on partager un taxi jusqu’à l’aéroport ?\nAutre client: Oui, bonne idée.",
      "explanation": "'Partager un taxi' = share a taxi. 'Bonne idée' = good idea.",
      "translation": "Client: Can we share a taxi to the airport?\nOther client: Yes, good idea."
    },
    {
      "sentence": "Touriste: Est-ce qu’il y a un bus pour l’aéroport ?\nAgent: Oui, le bus 100 part toutes les 20 minutes.",
      "explanation": "Practical airport transit info. 'Toutes les 20 minutes' = every 20 minutes.",
      "translation": "Tourist: Is there a bus to the airport?\nAgent: Yes, bus 100 leaves every 20 minutes."
    },
    {
      "sentence": "Passager: Combien de temps dure le trajet en RER jusqu’à l’aéroport ?\nAgent: Environ 40 minutes.",
      "explanation": "'RER' is regional train around Paris. 'Dure' = lasts.",
      "translation": "Passenger: How long is the RER trip to the airport?\nAgent: Around 40 minutes."
    },
    {
      "sentence": "Voyageur: Est-ce que le billet inclut la correspondance ?\nGuichetier: Oui, c’est un billet combiné.",
      "explanation": "'Correspondance' = transfer. 'Billet combiné' = combined ticket.",
      "translation": "Traveler: Does the ticket include the transfer?\nTicket agent: Yes, it’s a combined ticket."
    },
    {
      "sentence": "Client: Je vais à Montparnasse, c’est quelle ligne ?\nAgent: Ligne 6, direction Nation.",
      "explanation": "Asking metro directions. 'Direction' = line destination.",
      "translation": "Client: I'm going to Montparnasse, which line is it?\nAgent: Line 6, direction Nation."
    },
    {
      "sentence": "Passager: Où se trouve la consigne pour les bagages ?\nAgent: À côté de la sortie sud.",
      "explanation": "'Consigne' = luggage locker. 'Sortie sud' = south exit.",
      "translation": "Passenger: Where is the baggage locker?\nAgent: Next to the south exit."
    },
    {
      "sentence": "Client: Est-ce que ce taxi accepte la carte ?\nChauffeur: Oui, bien sûr.",
      "explanation": "'Accepte la carte' = accepts card. Common for taxis.",
      "translation": "Client: Does this taxi take card?\nDriver: Yes, of course."
    },
    {
      "sentence": "Touriste: Le musée du Louvre est loin d’ici ?\nPassant: Non, c’est à deux stations de métro.",
      "explanation": "'À deux stations' = two stops away.",
      "translation": "Tourist: Is the Louvre far from here?\nLocal: No, it’s two metro stops away."
    },
    {
      "sentence": "Client: Peut-on acheter un ticket à bord ?\nChauffeur: Non, il faut l’acheter avant.",
      "explanation": "'À bord' = onboard. 'Il faut' = you must.",
      "translation": "Client: Can I buy a ticket on board?\nDriver: No, you need to buy it beforehand."
    },
    {
      "sentence": "Voyageur: Ce bus va-t-il à l’Opéra ?\nChauffeur: Oui, c’est l’arrêt après la gare.",
      "explanation": "'Va-t-il à' = does it go to. 'Arrêt' = stop.",
      "translation": "Traveler: Does this bus go to Opéra?\nDriver: Yes, it’s the stop after the station."
    },
    {
      "sentence": "Client: Est-ce que le train est direct ?\nGuichetier: Non, il faut changer à Dijon.",
      "explanation": "'Changer' = transfer. 'Direct' = without change.",
      "translation": "Client: Is the train direct?\nTicket agent: No, you have to change at Dijon."
    },
    {
      "sentence": "Passager: Où est l’arrêt pour la navette ?\nAgent: Devant la porte 3 du terminal.",
      "explanation": "'Navette' = shuttle. 'Porte du terminal' = terminal gate.",
      "translation": "Passenger: Where is the shuttle stop?\nAgent: In front of gate 3 of the terminal."
    },
    {
      "sentence": "Client: Quel est le prix pour aller à l’aéroport en taxi ?\nChauffeur: Environ 55 euros, selon la circulation.",
      "explanation": "'Selon la circulation' = depending on traffic.",
      "translation": "Client: What’s the fare to the airport by taxi?\nDriver: Around 55 euros, depending on traffic."
    },
    {
      "sentence": "Voyageur: Le métro fonctionne toute la nuit ?\nAgent: Non, il s’arrête vers 1h du matin.",
      "explanation": "'Il s’arrête' = it stops. 'Vers' = around.",
      "translation": "Traveler: Does the metro run all night?\nAgent: No, it stops around 1 AM."
    },
    {
      "sentence": "Client: Peut-on prendre un ticket aller-retour ?\nGuichetier: Oui, c’est moins cher que deux simples.",
      "explanation": "'Aller-retour' = round trip. 'Moins cher' = cheaper.",
      "translation": "Client: Can I get a return ticket?\nAgent: Yes, it’s cheaper than two one-ways."
    },
    {
      "sentence": "Touriste: Est-ce que je dois valider mon ticket ?\nAgent: Oui, avant de monter dans le train.",
      "explanation": "'Valider' = validate/punch ticket.",
      "translation": "Tourist: Do I need to validate my ticket?\nAgent: Yes, before boarding the train."
    },
    {
      "sentence": "Client: Je veux aller au centre-ville. Quel bus dois-je prendre ?\nAgent: Le numéro 7, direction Hôtel de Ville.",
      "explanation": "'Quel bus dois-je prendre' = which bus should I take?",
      "translation": "Client: I want to go to the city center. Which bus should I take?\nAgent: Bus number 7, direction Hôtel de Ville."
    },
    {
      "sentence": "Voyageur: Mon vol est en retard. Puis-je changer mon billet ?\nAgent: Oui, mais il y a des frais.",
      "explanation": "'Vol en retard' = delayed flight. 'Des frais' = extra charge.",
      "translation": "Traveler: My flight is delayed. Can I change my ticket?\nAgent: Yes, but there are fees."
    },
    {
      "sentence": "Client: Où est le comptoir d’enregistrement ?\nAgent: Juste après les portes coulissantes à gauche.",
      "explanation": "'Comptoir d’enregistrement' = check-in counter.",
      "translation": "Client: Where is the check-in counter?\nAgent: Just past the sliding doors on the left."
    },
    {
      "sentence": "Je vais à la gare pour prendre le train.",
      "explanation": "We use 'à la' because 'gare' is feminine. 'Prendre le train' means 'to take the train'.",
      "translation": "I’m going to the station to catch the train."
    },
    {
      "sentence": "Elle achète un billet au guichet.",
      "explanation": "'Au' is used for masculine nouns like 'guichet' (ticket counter).",
      "translation": "She is buying a ticket at the counter."
    },
    {
      "sentence": "Nous attendons le train sur le quai.",
      "explanation": "'Sur le quai' means 'on the platform'. 'Quai' is masculine.",
      "translation": "We are waiting for the train on the platform."
    },
    {
      "sentence": "Aller simple ou aller-retour ?",
      "explanation": "This means 'One-way or round trip?' about train tickets.",
      "translation": "One-way or round trip?"
    },
    {
      "sentence": "Combien coûte un ticket de bus à Avignon ?",
      "explanation": "'Ticket de bus' = bus ticket.",
      "translation": "Translation unavailable."
    },
    {
      "sentence": "Est-ce qu’on peut acheter un ticket dans le bus ?",
      "explanation": "Great for smaller towns like Avignon.",
      "translation": "Translation unavailable."
    },
    {
      "sentence": "Où est l’arrêt le plus proche pour la ligne 2 ?",
      "explanation": "'Arrêt' = stop. 'Le plus proche' = nearest.",
      "translation": "Translation unavailable."
    },
    {
      "sentence": "Tu vas au musée demain ?",
      "explanation": "'Au' is short for 'à le'. 'Musée' is masculine.",
      "translation": "Are you going to the museum tomorrow?"
    },
    {
      "sentence": "Le train part dans dix minutes.",
      "explanation": "'Dans' is used for future time: 'in ten minutes'.",
      "translation": "Translation unavailable."
    },
    {
      "sentence": "Comment aller au centre-ville depuis la gare ?",
      "explanation": "'Depuis la gare' = from the station.",
      "translation": "How do I get to the city center from the station?"
    }
  ],
  "food": [
    {
      "sentence": "Une baguette, s’il vous plaît.",
      "explanation": "Simple and polite — the most common bakery phrase.",
      "translation": "One baguette, please."
    },
    {
      "sentence": "Je vais à la boulangerie pour acheter du pain.",
      "explanation": "'Boulangerie' is feminine. 'Du pain' = some bread.",
      "translation": "I’m going to the bakery to buy some bread."
    },
    {
      "sentence": "Je vais payer en espèces.",
      "explanation": "'En espèces' = in cash. 'Par carte' = by card.",
      "translation": "I’ll pay in cash."
    },
    {
      "sentence": "Vous avez autre chose ?",
      "explanation": "'Autre chose' = something else. Heard often at checkout.",
      "translation": "Do you have anything else?"
    },
    {
      "sentence": "C’est tout, merci.",
      "explanation": "'That’s all, thank you.' Common checkout phrase.",
      "translation": "That’s all, thank you."
    },
    {
      "sentence": "Je prends le menu du jour.",
      "explanation": "'Du jour' = of the day.",
      "translation": "Translation unavailable."
    },
    {
      "sentence": "Un verre d’eau, s’il vous plaît.",
      "explanation": "'D’eau' is short for 'de l’eau' after 'verre'.",
      "translation": "Translation unavailable."
    },
    {
      "sentence": "L’addition, s’il vous plaît.",
      "explanation": "The check, please. 'L’' before vowel-starting noun.",
      "translation": "Translation unavailable."
    },
    {
      "sentence": "La carte, s’il vous plaît.",
      "explanation": "'Carte' = full menu. 'Menu' in French can mean set meal.",
      "translation": "Translation unavailable."
    },
    {
      "sentence": "Nous avons réservé une table pour deux.",
      "explanation": "'Réservé' = reserved. 'Pour deux' = for two people.",
      "translation": "Translation unavailable."
    },
    {
      "sentence": "Client: Bonjour, je voudrais une table pour deux, s’il vous plaît.\nServeur: Bien sûr, suivez-moi.",
      "explanation": "'Je voudrais' is a polite way to ask. 'Suivez-moi' = follow me.",
      "translation": "Customer: Hello, I’d like a table for two, please.\nWaiter: Of course, follow me."
    },
    {
      "sentence": "Client: La carte, s’il vous plaît.\nServeur: La voici, prenez votre temps.",
      "explanation": "'La voici' = here it is. 'Prenez votre temps' = take your time.",
      "translation": "Customer: The menu, please.\nWaiter: Here it is, take your time."
    },
    {
      "sentence": "Client: Quel plat recommandez-vous ?\nServeur: Le confit de canard est excellent.",
      "explanation": "'Recommandez-vous' = do you recommend. A formal structure.",
      "translation": "Customer: What dish do you recommend?\nWaiter: The duck confit is excellent."
    },
    {
      "sentence": "Client: Je suis allergique aux noix. Ce plat en contient-il ?\nServeur: Non, ce plat est sans noix.",
      "explanation": "'En contient-il' = does it contain any. 'Sans noix' = without nuts.",
      "translation": "Customer: I'm allergic to nuts. Does this dish contain any?\nWaiter: No, it's nut-free."
    },
    {
      "sentence": "Client: Un verre de vin rouge, s’il vous plaît.\nServeur: Très bien, tout de suite.",
      "explanation": "'Un verre de' = a glass of. 'Tout de suite' = right away.",
      "translation": "Customer: A glass of red wine, please.\nWaiter: Very well, right away."
    },
    {
      "sentence": "Client: Est-ce que le menu est disponible en anglais ?\nServeur: Oui, je vous l’apporte.",
      "explanation": "'Est-ce que' introduces a polite question. 'Je vous l’apporte' = I'll bring it to you.",
      "translation": "Customer: Is the menu available in English?\nWaiter: Yes, I'll bring it to you."
    },
    {
      "sentence": "Client: Je prendrai le plat du jour.\nServeur: Très bon choix.",
      "explanation": "'Je prendrai' = I’ll have. Future tense used politely.",
      "translation": "Customer: I’ll have the dish of the day.\nWaiter: Very good choice."
    },
    {
      "sentence": "Client: Avez-vous des options végétariennes ?\nServeur: Oui, nous avons plusieurs plats végétariens.",
      "explanation": "'Avez-vous' = do you have. 'Plats végétariens' = vegetarian dishes.",
      "translation": "Customer: Do you have vegetarian options?\nWaiter: Yes, we have several vegetarian dishes."
    },
    {
      "sentence": "Client: C’était délicieux, merci beaucoup.\nServeur: Merci à vous, ravi que cela vous ait plu.",
      "explanation": "'Cela vous ait plu' = that you liked it. A polite past expression.",
      "translation": "Customer: That was delicious, thank you very much.\nWaiter: Thank you, glad you enjoyed it."
    },
    {
      "sentence": "Client: L’addition, s’il vous plaît.\nServeur: Je vous l’apporte tout de suite.",
      "explanation": "Common phrase for asking the bill. 'Tout de suite' = right away.",
      "translation": "Customer: The bill, please.\nWaiter: I’ll bring it right away."
    },
    {
      "sentence": "Client: Puis-je payer par carte ?\nServeur: Oui, bien sûr.",
      "explanation": "'Puis-je' is formal for 'may I'. 'Par carte' = by card.",
      "translation": "Customer: May I pay by card?\nWaiter: Yes, of course."
    },
    {
      "sentence": "Client: Avez-vous des desserts maison ?\nServeur: Oui, nous avons une tarte aux pommes faite maison.",
      "explanation": "'Desserts maison' = homemade desserts. 'Fait maison' = homemade.",
      "translation": "Customer: Do you have any homemade desserts?\nWaiter: Yes, we have a homemade apple tart."
    },
    {
      "sentence": "Client: Où sont les toilettes, s’il vous plaît ?\nServeur: Juste au fond à gauche.",
      "explanation": "Common practical phrase. 'Juste au fond à gauche' = at the back on the left.",
      "translation": "Customer: Where is the restroom, please?\nWaiter: Just at the back on the left."
    },
    {
      "sentence": "Client: Est-ce que ce fromage est pasteurisé ?\nVendeur: Oui, il est bien pasteurisé.",
      "explanation": "Useful question at a market or shop. 'Bien' adds confirmation.",
      "translation": "Customer: Is this cheese pasteurized?\nSeller: Yes, it’s definitely pasteurized."
    },
    {
      "sentence": "Client: Combien coûtent ces pommes ?\nVendeur: Deux euros le kilo.",
      "explanation": "'Combien coûtent' = how much do they cost. 'Le kilo' = per kilogram.",
      "translation": "Customer: How much do these apples cost?\nSeller: Two euros per kilo."
    },
    {
      "sentence": "Client: Je peux goûter ce fromage ?\nVendeur: Bien sûr, tenez.",
      "explanation": "'Je peux goûter' = can I taste. 'Tenez' = here you go.",
      "translation": "Customer: Can I taste this cheese?\nSeller: Of course, here you go."
    },
    {
      "sentence": "Client: Vous avez des œufs frais ?\nVendeur: Oui, ils viennent de la ferme d’à côté.",
      "explanation": "'D’à côté' = nearby. 'Viennent de' = come from.",
      "translation": "Customer: Do you have fresh eggs?\nSeller: Yes, they come from a nearby farm."
    },
    {
      "sentence": "Client: Ce vin est-il sec ou doux ?\nVendeur: Celui-ci est plutôt sec.",
      "explanation": "'Sec' = dry, 'doux' = sweet. Talking about wine taste.",
      "translation": "Customer: Is this wine dry or sweet?\nSeller: This one is rather dry."
    },
    {
      "sentence": "Client: Avez-vous du pain complet ?\nVendeur: Oui, il est juste là.",
      "explanation": "'Pain complet' = whole grain bread. 'Juste là' = right there.",
      "translation": "Customer: Do you have whole grain bread?\nSeller: Yes, it’s right there."
    },
    {
      "sentence": "Client: Je vais prendre un kilo de tomates.\nVendeur: Voilà, un kilo de tomates fraîches.",
      "explanation": "'Je vais prendre' = I’ll take. 'Voilà' = here you go.",
      "translation": "Customer: I’ll take a kilo of tomatoes.\nSeller: Here you go, a kilo of fresh tomatoes."
    },
    {
      "sentence": "Client: Est-ce que vous avez de la confiture maison ?\nVendeur: Oui, à la fraise et à l’abricot.",
      "explanation": "'Confiture maison' = homemade jam. 'À la fraise' = strawberry.",
      "translation": "Customer: Do you have any homemade jam?\nSeller: Yes, strawberry and apricot."
    },
    {
      "sentence": "Client: Ce plat est-il très épicé ?\nServeur: Non, il est plutôt doux.",
      "explanation": "'Épicé' = spicy, 'doux' = mild.",
      "translation": "Customer: Is this dish very spicy?\nWaiter: No, it's rather mild."
    },
    {
      "sentence": "Client: Puis-je avoir un peu plus de pain ?\nServeur: Bien sûr, je vous apporte ça.",
      "explanation": "'Un peu plus de' = a little more. 'Je vous apporte' = I’ll bring it to you.",
      "translation": "Customer: Could I have a bit more bread?\nWaiter: Of course, I’ll bring it."
    },
    {
      "sentence": "Client: Ce plat contient-il du gluten ?\nServeur: Oui, il en contient malheureusement.",
      "explanation": "Useful for allergies. 'Il en contient' = it contains some.",
      "translation": "Customer: Does this dish contain gluten?\nWaiter: Yes, unfortunately it does."
    },
    {
      "sentence": "Client: Avez-vous une formule déjeuner ?\nServeur: Oui, entrée, plat et dessert pour 15 euros.",
      "explanation": "'Formule déjeuner' = lunch menu deal. 'Entrée, plat, dessert' = course structure.",
      "translation": "Customer: Do you have a lunch menu?\nWaiter: Yes, starter, main, and dessert for 15 euros."
    },
    {
      "sentence": "Client: Ce fromage est-il fort ?\nVendeur: Il a un goût prononcé, oui.",
      "explanation": "'Fort' = strong flavor. 'Goût prononcé' = pronounced taste.",
      "translation": "Customer: Is this cheese strong?\nSeller: It has a pronounced flavor, yes."
    },
    {
      "sentence": "Client: Vous acceptez les tickets restaurant ?\nVendeur: Oui, sans problème.",
      "explanation": "'Tickets restaurant' = meal vouchers. 'Sans problème' = no problem.",
      "translation": "Customer: Do you accept meal vouchers?\nSeller: Yes, no problem."
    },
    {
      "sentence": "Client: Je n’ai pas de monnaie.\nVendeur: Pas de souci, on peut faire l’appoint.",
      "explanation": "'Monnaie' = change. 'Faire l’appoint' = round the amount.",
      "translation": "Customer: I don’t have change.\nSeller: No problem, we can round it."
    },
    {
      "sentence": "Client: Est-ce que je peux commander à emporter ?\nServeur: Oui, bien sûr.",
      "explanation": "'À emporter' = to take away / takeaway.",
      "translation": "Customer: Can I order to go?\nWaiter: Yes, of course."
    }
  ],
  "museum": [
    {
      "sentence": "Nous visitons le musée cet après-midi.",
      "explanation": "'Le musée' is masculine. 'Visiter' is a regular verb.",
      "translation": "We’re visiting the museum this afternoon."
    },
    {
      "sentence": "J’achète une carte postale à la boutique du musée.",
      "explanation": "'Du musée' = 'de le musée'. 'À la boutique' = feminine.",
      "translation": "I’m buying a postcard at the museum shop."
    },
    {
      "sentence": "Ils regardent les tableaux dans le musée.",
      "explanation": "Plural noun 'les tableaux'. 'Musée' is masculine.",
      "translation": "Translation unavailable."
    },
    {
      "sentence": "Il y avait une exposition sur l’espace et les planètes.",
      "explanation": "'Sur l’espace' = about space. 'Les planètes' = plural.",
      "translation": "There was an exhibition about space and the planets."
    },
    {
      "sentence": "Je voudrais visiter le Palais des Papes.",
      "explanation": "Famous site in Avignon. Polite request.",
      "translation": "I’d like to visit the Palace of the Popes."
    },
    {
      "sentence": "Où commence la visite du palais ?",
      "explanation": "'Commence' = starts. Used before guided tours.",
      "translation": "Where does the palace tour start?"
    },
    {
      "sentence": "Combien de temps dure la visite guidée ?",
      "explanation": "'Visite guidée' = guided tour. 'Dure' = lasts.",
      "translation": "How long does the guided tour last?"
    },
    {
      "sentence": "Est-ce qu’il y a un audioguide en anglais ?",
      "explanation": "'Audioguide' = audio guide. 'En anglais' = in English.",
      "translation": "Is there an audio guide in English?"
    },
    {
      "sentence": "Est-ce qu’on peut entrer sans réservation ?",
      "explanation": "'Sans réservation' = without reservation.",
      "translation": "Can we enter without a reservation?"
    },
    {
      "sentence": "Le pont d’Avignon est ouvert aujourd’hui ?",
      "explanation": "Famous historic site. 'Est ouvert' = is open.",
      "translation": "Is the bridge of Avignon open today?"
    }
  ],
  "politics": [
    {
      "sentence": "Est-ce que l’Union européenne est populaire en France ?",
      "explanation": "'Est-ce que' starts polite questions. Feminine subject.",
      "translation": "Is the European Union popular in France?"
    },
    {
      "sentence": "Les élections européennes ont lieu tous les cinq ans.",
      "explanation": "'Ont lieu' = take place. 'Tous les cinq ans' = every five years.",
      "translation": "The European elections take place every five years."
    },
    {
      "sentence": "Certains Français sont sceptiques, d’autres sont très favorables.",
      "explanation": "'Certains... d'autres...' = contrast structure.",
      "translation": "Some French people are skeptical, others are very supportive."
    },
    {
      "sentence": "Est-ce que les jeunes votent beaucoup en France ?",
      "explanation": "'Les jeunes' = young people. Good way to ask opinions.",
      "translation": "Do young people vote a lot in France?"
    },
    {
      "sentence": "La politique m’intéresse, mais parfois c’est compliqué.",
      "explanation": "'M’intéresse' = interests me. Honest structure.",
      "translation": "Politics interests me, but sometimes it’s complicated."
    },
    {
      "sentence": "Je ne suis pas sûr de comprendre les partis politiques français.",
      "explanation": "'Pas sûr de comprendre' = not sure I understand.",
      "translation": "I’m not sure I understand the French political parties."
    },
    {
      "sentence": "On a parlé de l’environnement et du climat pendant le débat.",
      "explanation": "'Parlé de' = talked about. 'Du' = de + le.",
      "translation": "Translation unavailable."
    },
    {
      "sentence": "Est-ce que vous recyclez chez vous ?",
      "explanation": "'Chez vous' = at your place.",
      "translation": "Do you recycle at home?"
    },
    {
      "sentence": "Il y avait beaucoup de monde au marché.",
      "explanation": "'Beaucoup de monde' = a lot of people (crowd).",
      "translation": "There were a lot of people at the market."
    }
  ],
  "science": [
    {
      "sentence": "J’ai visité le musée des sciences hier.",
      "explanation": "'Des sciences' = of sciences (plural).",
      "translation": "I visited the science museum yesterday."
    },
    {
      "sentence": "La Terre tourne autour du Soleil.",
      "explanation": "'Tourner autour de' = orbit. 'Du' = de + le.",
      "translation": "The Earth orbits around the Sun."
    },
    {
      "sentence": "Est-ce que tu t’intéresses à l’astronomie ?",
      "explanation": "'T’intéresses à' = reflexive interest structure.",
      "translation": "Are you interested in astronomy?"
    },
    {
      "sentence": "J’ai lu un article sur le changement climatique.",
      "explanation": "'Sur le changement climatique' = about climate change.",
      "translation": "I read an article about climate change."
    },
    {
      "sentence": "Tu crois qu’on va vivre sur Mars un jour ?",
      "explanation": "'Un jour' = one day. 'Tu crois que…?' = Do you think…?",
      "translation": "Do you think we'll live on Mars one day?"
    },
    {
      "sentence": "La technologie avance très vite.",
      "explanation": "'Avancer' = to advance. 'Très vite' = very fast.",
      "translation": "Technology is advancing very quickly."
    },
    {
      "sentence": "Je trouve que les réseaux sociaux sont utiles mais parfois dangereux.",
      "explanation": "'Je trouve que…' = I think that. Balanced opinion.",
      "translation": "I think social media is useful but sometimes dangerous."
    },
    {
      "sentence": "Tu regardes souvent des documentaires ?",
      "explanation": "'Souvent' = often. Very conversational.",
      "translation": "Do you often watch documentaries?"
    },
    {
      "sentence": "Il y avait une exposition sur l’espace et les planètes.",
      "explanation": "Repeat from museum, but still relevant here for science.",
      "translation": "There was an exhibition about space and the planets."
    },
    {
      "sentence": "Nous avons parlé des nouvelles découvertes en biologie.",
      "explanation": "'Découvertes' = discoveries. Talking about scientific research.",
      "translation": "We talked about new discoveries in biology."
    }
  ],
  "history": [
    {
      "sentence": "La Révolution française a commencé en 1789.",
      "explanation": "A simple past tense statement about a key historical event.",
      "translation": "The French Revolution started in 1789."
    },
    {
      "sentence": "Napoléon Bonaparte est devenu empereur en 1804.",
      "explanation": "'Devenu' is the past participle of 'devenir' with être.",
      "translation": "Napoleon Bonaparte became emperor in 1804."
    },
    {
      "sentence": "La Bastille était une prison célèbre à Paris.",
      "explanation": "'Était' is the imperfect tense. Used for background descriptions.",
      "translation": "The Bastille was a famous prison in Paris."
    },
    {
      "sentence": "La Première Guerre mondiale a duré de 1914 à 1918.",
      "explanation": "'A duré' = lasted. Use 'de ... à ...' for date ranges.",
      "translation": "World War I lasted from 1914 to 1918."
    },
    {
      "sentence": "La Seconde Guerre mondiale a eu un impact mondial.",
      "explanation": "'A eu' = had (past tense of 'avoir').",
      "translation": "World War II had a global impact."
    },
    {
      "sentence": "Charles de Gaulle a dirigé la Résistance française.",
      "explanation": "'A dirigé' = led. Historical figure in WWII.",
      "translation": "Charles de Gaulle led the French Resistance."
    },
    {
      "sentence": "Le roi Louis XVI a été exécuté en 1793.",
      "explanation": "'A été exécuté' = was executed (passive voice).",
      "translation": "King Louis XVI was executed in 1793."
    },
    {
      "sentence": "Marie Curie a reçu deux prix Nobel.",
      "explanation": "Famous scientist. 'A reçu' = received.",
      "translation": "Marie Curie received two Nobel Prizes."
    },
    {
      "sentence": "La Déclaration des Droits de l’Homme a été signée en 1789.",
      "explanation": "Important document. 'A été signée' = was signed.",
      "translation": "The Declaration of the Rights of Man was signed in 1789."
    },
    {
      "sentence": "La France a aboli la peine de mort en 1981.",
      "explanation": "'A aboli' = abolished. 'Peine de mort' = death penalty.",
      "translation": "France abolished the death penalty in 1981."
    },
    {
      "sentence": "La Tour Eiffel a été construite pour l’Exposition universelle de 1889.",
      "explanation": "'A été construite' = was built. Passive voice.",
      "translation": "The Eiffel Tower was built for the 1889 World's Fair."
    },
    {
      "sentence": "Le Moyen Âge a duré plusieurs siècles.",
      "explanation": "'Plusieurs siècles' = several centuries. Talking about long historical periods.",
      "translation": "The Middle Ages lasted several centuries."
    },
    {
      "sentence": "La Renaissance a marqué un renouveau artistique en Europe.",
      "explanation": "'A marqué' = marked. Used to define historical eras.",
      "translation": "The Renaissance marked an artistic revival in Europe."
    },
    {
      "sentence": "Le château de Versailles est un symbole de la monarchie française.",
      "explanation": "Common present tense structure about a historical place.",
      "translation": "The Palace of Versailles is a symbol of the French monarchy."
    },
    {
      "sentence": "Je visite souvent les musées pour en apprendre plus sur l’histoire.",
      "explanation": "'En apprendre plus sur' = to learn more about.",
      "translation": "I often visit museums to learn more about history."
    },
    {
      "sentence": "L’esclavage a été aboli dans les colonies françaises en 1848.",
      "explanation": "'A été aboli' = was abolished. Passive form.",
      "translation": "Slavery was abolished in the French colonies in 1848."
    },
    {
      "sentence": "La Réforme protestante a changé l’histoire de l’Europe.",
      "explanation": "'A changé' = changed. Talking about historical impact.",
      "translation": "The Protestant Reformation changed the history of Europe."
    },
    {
      "sentence": "L’Empire romain a laissé de nombreuses traces en France.",
      "explanation": "'A laissé' = left. Refers to Roman ruins still visible today.",
      "translation": "The Roman Empire left many traces in France."
    },
    {
      "sentence": "Le Code Napoléon est encore utilisé aujourd’hui.",
      "explanation": "Historical laws still influencing modern France.",
      "translation": "The Napoleonic Code is still used today."
    },
    {
      "sentence": "Le traité de Versailles a mis fin à la Première Guerre mondiale.",
      "explanation": "'A mis fin à' = ended.",
      "translation": "The Treaty of Versailles ended World War I."
    },
    {
      "sentence": "Le Général de Gaulle est devenu président en 1959.",
      "explanation": "Another milestone in modern French history.",
      "translation": "General de Gaulle became president in 1959."
    },
    {
      "sentence": "La commune de Paris a duré 72 jours en 1871.",
      "explanation": "'A duré' = lasted. Short-lived political event.",
      "translation": "The Paris Commune lasted 72 days in 1871."
    },
    {
      "sentence": "Je trouve l’histoire de la Révolution fascinante.",
      "explanation": "Useful opinion phrase: 'Je trouve... fascinant(e)'.",
      "translation": "I find the history of the Revolution fascinating."
    },
    {
      "sentence": "Le musée de l’Armée se trouve aux Invalides à Paris.",
      "explanation": "'Se trouve' = is located. A way to talk about places.",
      "translation": "The Army Museum is located at Les Invalides in Paris."
    },
    {
      "sentence": "Les Gaulois ont résisté à l’invasion romaine.",
      "explanation": "Simple past action in French history.",
      "translation": "The Gauls resisted the Roman invasion."
    },
    {
      "sentence": "Vercingétorix est un héros national en France.",
      "explanation": "Famous Gallic leader. Present tense statement.",
      "translation": "Vercingetorix is a national hero in France."
    },
    {
      "sentence": "La Révolution industrielle a transformé les villes françaises.",
      "explanation": "'A transformé' = transformed. Talking about societal changes.",
      "translation": "The Industrial Revolution transformed French cities."
    },
    {
      "sentence": "La liberté, l’égalité et la fraternité sont les valeurs de la République.",
      "explanation": "These are the core values of modern France.",
      "translation": "Liberty, equality and fraternity are the values of the Republic."
    },
    {
      "sentence": "La France a connu de nombreuses révolutions.",
      "explanation": "'A connu' = experienced. 'De nombreuses' = many.",
      "translation": "France has experienced many revolutions."
    },
    {
      "sentence": "Le 14 juillet est la fête nationale en France.",
      "explanation": "'Fête nationale' = national holiday. Celebrates the storming of the Bastille.",
      "translation": "July 14th is France's national holiday."
    }
    ],
  "cinema": [
    {
      "sentence": "J’ai vu un film incroyable hier soir.",
      "explanation": "'Vu' is past of 'voir'. 'Incroyable' = incredible.",
      "translation": "I saw an incredible movie last night."
    },
    {
      "sentence": "C’était un film de science-fiction avec beaucoup d’effets spéciaux.",
      "explanation": "'Effets spéciaux' = special effects.",
      "translation": "It was a science fiction movie with lots of special effects."
    },
    {
      "sentence": "Qui est ton acteur préféré ?",
      "explanation": "'Préféré' comes after the noun here.",
      "translation": "Who is your favorite actor?"
    },
    {
      "sentence": "J’adore les films étrangers, surtout les drames français.",
      "explanation": "'Surtout' = especially. 'Étrangers' = foreign.",
      "translation": "I love foreign films, especially French dramas."
    },
    {
      "sentence": "Ce film est basé sur une histoire vraie.",
      "explanation": "'Basé sur' = based on. 'Histoire vraie' = true story.",
      "translation": "This film is based on a true story."
    },
    {
      "sentence": "On peut aller au cinéma ce soir si tu veux.",
      "explanation": "'Si tu veux' = if you want. Friendly phrasing.",
      "translation": "We can go to the cinema tonight if you want."
    },
    {
      "sentence": "J’aime bien les films qui font réfléchir.",
      "explanation": "'Qui font réfléchir' = that make you think.",
      "translation": "I like movies that make you think."
    },
    {
      "sentence": "Tu préfères voir les films en version originale ou doublée ?",
      "explanation": "'Version originale' = original version (subtitled).",
      "translation": "Do you prefer to watch movies in the original version or dubbed?"
    },
    {
      "sentence": "Le dernier film que j’ai vu était un peu décevant.",
      "explanation": "'Décevant' = disappointing.",
      "translation": "The last movie I saw was a bit disappointing."
    },
    {
      "sentence": "Il y avait trop de dialogues et pas assez d’action.",
      "explanation": "'Trop de / pas assez de' = contrast pattern.",
      "translation": "There was too much dialogue and not enough action."
    },
    {
      "sentence": "Mais la bande-son était incroyable !",
      "explanation": "'Bande-son' = soundtrack.",
      "translation": "But the soundtrack was amazing!"
    }
  ],
  "avignon": [
    {
      "sentence": "Je voudrais visiter le Palais des Papes.",
      "explanation": "Famous site in Avignon. Polite request.",
      "translation": "I’d like to visit the Palace of the Popes."
    },
    {
      "sentence": "Comment aller au centre-ville depuis la gare ?",
      "explanation": "'Depuis la gare' = from the station.",
      "translation": "How do I get to the city center from the station?"
    },
    {
      "sentence": "Y a-t-il un bus ou un tramway pour le centre ?",
      "explanation": "'Y a-t-il' = is there…? formal style.",
      "translation": "Is there a bus or tram to the center?"
    },
    {
      "sentence": "Combien coûte un ticket de bus à Avignon ?",
      "explanation": "'Ticket de bus' = bus ticket.",
      "translation": "Translation unavailable."
    },
    {
      "sentence": "Est-ce qu’on peut acheter un ticket dans le bus ?",
      "explanation": "Common in smaller cities.",
      "translation": "Translation unavailable."
    },
    {
      "sentence": "Où est l’arrêt le plus proche pour la ligne 2 ?",
      "explanation": "'Arrêt' = stop. 'Le plus proche' = nearest.",
      "translation": "Translation unavailable."
    },
    {
      "sentence": "Le pont d’Avignon est ouvert aujourd’hui ?",
      "explanation": "Famous bridge from the song. 'Est ouvert' = is open.",
      "translation": "Is the bridge of Avignon open today?"
    },
    {
      "sentence": "Où puis-je acheter des souvenirs locaux ?",
      "explanation": "'Souvenirs locaux' = local souvenirs. 'Puis-je' = formal 'may I'.",
      "translation": "Where can I buy local souvenirs?"
    },
    {
      "sentence": "Est-ce que le marché des Halles est encore ouvert ?",
      "explanation": "'Les Halles' = covered market. 'Encore ouvert' = still open.",
      "translation": "Is the Halles market still open?"
    },
    {
      "sentence": "À quelle heure ferme le musée Calvet ?",
      "explanation": "Asking about museum closing time.",
      "translation": "What time does the Calvet museum close?"
    }
  ]
};