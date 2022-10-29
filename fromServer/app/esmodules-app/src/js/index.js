"use strict";

import UI from "./modules/ui";
import POST from "./modules/postMethod";
import GET from "./modules/getMethod";
import PATCH from "./modules/patchMethod";
import DELETE from "./modules/deleteMethod";
import COMPLETE from "./modules/complete";
import FILTER from "./modules/filter";
import SELECT from "./modules/select";

async function engine () {
	const url = "http://localhost:8888/todos";

	UI.start();

	const { form, screenInput } = UI;

	await POST(form, screenInput, url);
	await GET(UI, url);
	await SELECT(PATCH, DELETE, COMPLETE, url);
	await FILTER(
		document.querySelectorAll("[data-filter]"),
		url,
		UI,
		PATCH, 
		DELETE, 
		COMPLETE
	)
}

engine();