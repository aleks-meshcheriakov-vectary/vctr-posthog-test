// import posthog from "posthog-js";
import posthog from "https://esm.sh/posthog-js@1.161.5";

posthog.init("phc_gCjaeBt5lx578jmFbMjb0ltJt8012o7Dhl5udaR7YIF", {
	api_host: "https://eu.i.posthog.com",
	person_profiles: "identified_only", // or 'always' to create profiles for anonymous users as well
});
