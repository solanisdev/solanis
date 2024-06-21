"use client";

import { EditorChange } from "codemirror";
import { useEffect, useMemo, useRef, useState } from "react";
import SimpleMDE from "react-simplemde-editor";

const mdeOptions = { minHeight: "100%" };

export default function Editor() {
	const [markdown, setMarkdown] = useState("");
	const [lastTitleSaved, setLastTitleSaved] = useState("Untitled");
	const titleRef = useRef<HTMLInputElement>(null);

	const onChange = (v: string, _chobj?: EditorChange) => {
		setMarkdown(v);
	};

	const onBlur = () => {
		if (titleRef.current) {
			if (!titleRef.current.value) titleRef.current.value = lastTitleSaved;

			setLastTitleSaved(titleRef.current.value);
		}
	};

	const memoMdeOptions = useMemo(() => mdeOptions, []);

	useEffect(() => {
		if (titleRef.current) {
			titleRef.current.value = "Untitled";
		}
	}, []);

	return (
		<>
			<input
				className="font-semibold text-4xl pb-2 focus:outline-none"
				onBlur={onBlur}
				ref={titleRef}
			/>
			<SimpleMDE
				className="w-full h-full"
				value={markdown}
				onChange={onChange}
				options={memoMdeOptions}
			/>
		</>
	);
}
