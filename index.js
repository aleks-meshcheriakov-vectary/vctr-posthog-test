// @ts-check

// @ts-ignore
// import _posthog from "posthog-js";

document.addEventListener("DOMContentLoaded", async () => {
	// @ts-ignore
	const { posthog } = await import("https://esm.sh/posthog-js@1.161.5");

	posthog.init("phc_gCjaeBt5lx578jmFbMjb0ltJt8012o7Dhl5udaR7YIF", {
		api_host: "https://eu.i.posthog.com",
		person_profiles: "identified_only", // or 'always' to create profiles for anonymous users as well
		autocapture: {
			dom_event_allowlist: ["click"], // DOM events from this list ['click', 'change', 'submit']
			// url_allowlist: ['posthog.com./docs/.*'], // strings or RegExps
			// url_ignorelist can be used on its own, or combined with url_allowlist to further filter which URLs are captured
			// url_ignorelist: ['posthog.com./docs/.*/secret-section/.*'], // strings or RegExps
			element_allowlist: ["a", "button", "form"], // DOM elements from this list ['a', 'button', 'form', 'input', 'select', 'textarea', 'label']
			css_selector_allowlist: ["[ph-autocapture]"], // List of CSS selectors
			// element_attribute_ignorelist:['data-attr-pii="email"'], // List of element attributes to ignore
		},
	});

	posthog.onFeatureFlags(function () {
		const testEls = document.querySelectorAll("[js-ab-test]");
		const testFlag = posthog.getFeatureFlag("vctr-posthog-test");
		console.log({ testFlag });
		testEls.forEach((el) => {
			// @ts-ignore
			el.style.setProperty("display", "none");
			if (el.getAttribute("js-ab-test") === testFlag) {
				// @ts-ignore
				el.style.setProperty("display", "block");
			} else if (el.getAttribute("js-ab-test") === "control") {
				const _el = document.querySelectorAll(`[js-ab-test="control"]`);
				// @ts-ignore
				el.style.setProperty("display", "block");
			}
		});
	});
});
