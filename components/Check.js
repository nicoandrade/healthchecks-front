import { CheckIcon } from "@heroicons/react/outline";
import { XIcon } from "@heroicons/react/outline";
import { PauseIcon } from "@heroicons/react/outline";
import { ExclamationCircleIcon } from "@heroicons/react/outline";
import { ClockIcon } from "@heroicons/react/solid";

import moment from "moment";

const Check = ({ name, status, last_ping, tz, last_duration }) => {
    return (
        <div
            className={`text-white bg-gray-800 rounded-lg p-4 flex items-center justify-between relative`}
        >
            <div
                className={`rounded-full  flex justify-center items-center p-1 mr-4 relative z-10 ${
                    {
                        up: "bg-green-600",
                        down: "bg-red-600",
                        paused: "bg-gray-600",
                        grace: "bg-yellow-600",
                    }[status]
                }`}
                title={
                    {
                        up: "Up",
                        down: "Down",
                        paused: "Paused",
                        grace: "Grace",
                    }[status]
                }
            >
                {
                    {
                        up: <CheckIcon className="h-5 w-5 text-white" />,
                        down: <XIcon className="h-5 w-5 text-white" />,
                        paused: <PauseIcon className="h-5 w-5 text-white" />,
                        grace: (
                            <ExclamationCircleIcon className="h-5 w-5 text-white" />
                        ),
                    }[status]
                }
            </div>
            <div className="flex-1 relative z-10">
                <h3 className="font-semibold mb-1 leading-tight">{name}</h3>

                <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <span>
                        {moment(last_ping).diff(moment(), "days") > -100
                            ? moment(last_ping).fromNow()
                            : moment(last_ping).format("DD MMMM YYYY")}
                    </span>
                    {last_duration && (
                        <span className="flex items-center">
                            <ClockIcon className="h-3 w-3 text-gray-500 mr-1" />
                            {last_duration} sec
                        </span>
                    )}
                </div>
            </div>

            {status == "down" && (
                <div className="absolute inset-0 border-2 border-red-700 rounded-lg z-0"></div>
            )}
            {status == "paused" && (
                <div className="absolute inset-0 border-2 border-gray-700 rounded-lg z-0"></div>
            )}
            {status == "grace" && (
                <div className="absolute inset-0 border-2 border-yellow-800 rounded-lg z-0"></div>
            )}
        </div>
    );
};

export default Check;
