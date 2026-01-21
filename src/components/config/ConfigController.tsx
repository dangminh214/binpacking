import type React from "react";
import { Button } from "../ui/button";
import { ConfigInput } from "./ConfigInput";
import { PANELCLASS, HEADERTEXT } from "../tw-classes";
import type { AlgorithmType, SelectionStrategy } from "./config-types";
import type { AlgSolution } from "@/binpacking/algorithm-solution";
import type { Solution } from "@/algorithm/abstract-solution";
import type { Box } from "@/binpacking/classes/box";
import type { Dispatch, SetStateAction } from "react";
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
    generateAndSolve: (
        config: UserConfig,
        selectionStrategy: string,
        algorithm: string,
        setSolution: (sol: Solution<Box>) => void,
        setIsSolving: React.Dispatch<React.SetStateAction<boolean>>,
    ) => void;
    isSolving: boolean;
    selectionStrategy: SelectionStrategy;
    algorithm: AlgorithmType;
    setSolution: Dispatch<React.SetStateAction<AlgSolution | null>>;
    setIsSolving: Dispatch<SetStateAction<boolean>>;
}

export const ConfigController: React.FC<ControllerProps> = ({
    config,
    setConfig,
    generateAndSolve,
    isSolving,
    selectionStrategy,
    algorithm,
    setSolution,
    setIsSolving,
}) => {
    return (
        <div className={`${PANELCLASS} w-100`}>
            <h2 className={HEADERTEXT}>Configuration</h2>
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
            <Button
                onClick={() =>
                    generateAndSolve(
                        config,
                        selectionStrategy,
                        algorithm,
                        setSolution,
                        setIsSolving,
                    )
                }
                disabled={isSolving}
            >
                {isSolving ? "Solving ..." : "Generate & Solve"}
            </Button>
        </div>
    );
};
