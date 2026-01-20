import type React from "react";
import { Button } from "../ui/button";
import { ConfigInput } from "./ConfigInput";
import { PANELCLASS, HEADERCLASS } from "../tw-classes";
export interface UserConfig {
    instanceNumber: number;
    minW: number;
    maxW: number;
    minH: number;
    maxH: number;
    boxL: number;
}

interface ControllerProps {
    config: UserConfig;
    setConfig: React.Dispatch<React.SetStateAction<UserConfig>>;
    generateAndSolve: () => void;
}

export const ConfigController: React.FC<ControllerProps> = ({
    config,
    setConfig,
    generateAndSolve,
}) => {
    return (
        <div className={`${PANELCLASS} w-100`}>
            <h2 className={HEADERCLASS}>Configuration</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                <ConfigInput
                    id="instanceNumber"
                    label="Number of Items"
                    value={config.instanceNumber}
                    onChange={(value) =>
                        setConfig({ ...config, instanceNumber: value })
                    }
                    min={1}
                />
                <ConfigInput
                    id="minW"
                    label="Min Width"
                    value={config.minW}
                    onChange={(value) => setConfig({ ...config, minW: value })}
                    min={1}
                />
                <ConfigInput
                    id="maxW"
                    label="Max Width"
                    value={config.maxW}
                    onChange={(value) => setConfig({ ...config, maxW: value })}
                    min={1}
                />
                <ConfigInput
                    id="minH"
                    label="Min Height"
                    value={config.minH}
                    onChange={(value) => setConfig({ ...config, minH: value })}
                    min={1}
                />
                <ConfigInput
                    id="maxH"
                    label="Max Height"
                    value={config.maxH}
                    onChange={(value) => setConfig({ ...config, maxH: value })}
                    min={1}
                />
                <ConfigInput
                    id="boxL"
                    label="Box Size"
                    value={config.boxL}
                    onChange={(value) => setConfig({ ...config, boxL: value })}
                    min={1}
                />
            </div>
            <Button onClick={generateAndSolve}>Generate & Solve</Button>
        </div>
    );
};
