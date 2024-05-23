import React from "react";

import { Attachment as AttachmentIcon } from "@material-ui/icons";

import "./Attachment.scss";

/**
 * @param {{ name: string, size: string }} document_type Document Type
 * @returns Attachment
 */
const Attachment = ({
	name,
	file,
	size,
}) => {
	return (
		<div className="attachment-card">
			{/* Icon */}
			<div className="icon">
				<AttachmentIcon />
			</div>

			{/* Content */}
			<a
				href={file}
				target="_blank"
				rel="noreferrer"
				style={{ all: "unset", cursor: "pointer" }}
			>
				<div className="content">
					<span className="file-name">{name}</span>
					<span className="file-size">{`(${size})`}</span>
				</div>
			</a>
		</div>
	);
};

export default Attachment;
