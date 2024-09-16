// @ts-check

// @ts-ignore
// import posthog from "https://esm.sh/posthog-js@1.161.5";

document.addEventListener("DOMContentLoaded", async () => {
	// @ts-ignore
	const { posthog } = await import("https://esm.sh/posthog-js@1.161.5");

	posthog.init("phc_gCjaeBt5lx578jmFbMjb0ltJt8012o7Dhl5udaR7YIF", {
		api_host: "https://eu.i.posthog.com",
		person_profiles: "identified_only", // or 'always' to create profiles for anonymous users as well
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
